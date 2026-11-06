import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider as JotaiProvider, createStore } from 'jotai';

import { searchRecordStoreFamilyState } from '@/object-record/record-picker/multiple-record-picker/states/searchRecordStoreComponentFamilyState';
import { SingleRecordPickerMenuItemsWithSearch } from '@/object-record/record-picker/single-record-picker/components/SingleRecordPickerMenuItemsWithSearch';
import { SingleRecordPickerComponentInstanceContext } from '@/object-record/record-picker/single-record-picker/states/contexts/SingleRecordPickerComponentInstanceContext';
import { singleRecordPickerSearchFilterComponentState } from '@/object-record/record-picker/single-record-picker/states/singleRecordPickerSearchFilterComponentState';
import { type RecordPickerPickableMorphItem } from '@/object-record/record-picker/types/RecordPickerPickableMorphItem';
import { focusStackState } from '@/ui/utilities/focus/states/focusStackState';
import { FocusComponentType } from '@/ui/utilities/focus/types/FocusComponentType';

const mockUseSingleRecordPickerRecords = jest.fn();

jest.mock(
  '@/object-record/record-picker/single-record-picker/hooks/useSingleRecordPickerRecords',
  () => ({
    useSingleRecordPickerRecords: () => mockUseSingleRecordPickerRecords(),
  }),
);
jest.mock('@/object-metadata/hooks/useObjectMetadataItems', () => ({
  useObjectMetadataItems: () => ({ objectMetadataItems: [] }),
}));
jest.mock('@/object-record/hooks/useObjectPermissions', () => ({
  useObjectPermissions: () => ({ objectPermissionsByObjectMetadataId: {} }),
}));
jest.mock('@/apollo/components/ToastOnQueryErrorEffect', () => ({
  ToastOnQueryErrorEffect: () => null,
}));
jest.mock('@/ui/layout/dropdown/components/DropdownMenuSearchInput', () => ({
  DropdownMenuSearchInput: () => null,
}));

const instanceId = 'single-record-picker-menu-items-with-search-test';
const focusId = 'single-record-picker-menu-items-with-search-test-focus';

const recordItems = [
  { recordId: 'record-john', label: 'John Doe' },
  { recordId: 'record-jane', label: 'Jane Roe' },
];

const toPickableMorphItems = (
  recordIds: string[],
): RecordPickerPickableMorphItem[] =>
  recordIds.map((recordId) => ({
    recordId,
    objectMetadataId: 'workspace-member-metadata-id',
    isSelected: false,
    isMatchingSearchFilter: true,
  }));

const renderPicker = () => {
  const store = createStore();

  store.set(focusStackState.atom, [
    {
      focusId,
      componentInstance: {
        componentType: FocusComponentType.DROPDOWN,
        componentInstanceId: focusId,
      },
      globalHotkeysConfig: {
        enableGlobalHotkeysWithModifiers: true,
        enableGlobalHotkeysConflictingWithKeyboard: true,
      },
    },
  ]);

  recordItems.forEach(({ recordId, label }) =>
    store.set(searchRecordStoreFamilyState.atomFamily(recordId), {
      recordId,
      label,
      objectLabelSingular: 'Workspace Member',
      objectNameSingular: 'workspaceMember',
      tsRank: 0,
      tsRankCD: 0,
    }),
  );

  const setRecords = (recordIds: string[], loading: boolean) =>
    mockUseSingleRecordPickerRecords.mockReturnValue({
      pickableMorphItems: toPickableMorphItems(recordIds),
      loading,
    });

  setRecords(
    recordItems.map(({ recordId }) => recordId),
    false,
  );

  const onMorphItemSelected = jest.fn();
  const renderPickerElement = () => (
    <I18nProvider i18n={i18n}>
      <JotaiProvider store={store}>
        <SingleRecordPickerComponentInstanceContext.Provider
          value={{ instanceId }}
        >
          <SingleRecordPickerMenuItemsWithSearch
            emptyLabel="No Assignee"
            objectNameSingulars={['workspaceMember']}
            onMorphItemSelected={onMorphItemSelected}
            focusId={focusId}
          />
        </SingleRecordPickerComponentInstanceContext.Provider>
      </JotaiProvider>
    </I18nProvider>
  );

  const { rerender } = render(renderPickerElement());
  const typeSearch = (searchFilter: string) => {
    setRecords(
      recordItems.map(({ recordId }) => recordId),
      true,
    );
    act(() => {
      store.set(
        singleRecordPickerSearchFilterComponentState.atomFamily({ instanceId }),
        searchFilter,
      );
    });
  };
  const receiveResults = (recordIds: string[]) => {
    setRecords(recordIds, false);
    rerender(renderPickerElement());
  };

  return {
    onMorphItemSelected,
    typeSearch,
    receiveResults,
    user: userEvent.setup(),
  };
};

describe('SingleRecordPickerMenuItemsWithSearch', () => {
  beforeAll(() => {
    i18n.load('en', {});
    i18n.activate('en');
  });

  it('does not clear the relation when Enter is pressed with an empty search', async () => {
    const { onMorphItemSelected, user } = renderPicker();

    await user.keyboard('{Enter}');

    expect(onMorphItemSelected).not.toHaveBeenCalled();
  });

  it('selects the first fresh match with Enter after searching', async () => {
    const { onMorphItemSelected, typeSearch, receiveResults, user } =
      renderPicker();

    typeSearch('jane');
    await user.keyboard('{Enter}');
    expect(onMorphItemSelected).not.toHaveBeenCalled();

    receiveResults(['record-jane']);
    await user.keyboard('{Enter}');

    expect(onMorphItemSelected).toHaveBeenCalledWith(
      expect.objectContaining({ recordId: 'record-jane' }),
    );
  });

  it('keeps the empty option selected after the user arrows back to it', async () => {
    const { onMorphItemSelected, typeSearch, receiveResults, user } =
      renderPicker();

    typeSearch('jane');
    receiveResults(['record-jane']);
    await user.keyboard('{ArrowUp}');
    receiveResults(['record-jane']);
    await user.keyboard('{Enter}');

    expect(onMorphItemSelected).toHaveBeenCalledTimes(1);
    expect(onMorphItemSelected).toHaveBeenCalledWith();
  });
});
