import { isNonEmptyString } from '@sniptt/guards';
import { useEffect, useRef } from 'react';
import { isDefined } from 'twenty-shared/utils';

export const usePreselectFirstMatchingRecordOnSearch = ({
  searchFilter,
  firstMatchingRecordId,
  preselect,
}: {
  searchFilter: string;
  firstMatchingRecordId: string | undefined;
  preselect: (recordId: string) => void;
}) => {
  const lastPreselectedSearchFilter = useRef<string | undefined>(undefined);

  useEffect(() => {
    if (!isNonEmptyString(searchFilter)) {
      lastPreselectedSearchFilter.current = undefined;
      return;
    }

    if (
      !isDefined(firstMatchingRecordId) ||
      lastPreselectedSearchFilter.current === searchFilter
    ) {
      return;
    }

    lastPreselectedSearchFilter.current = searchFilter;
    preselect(firstMatchingRecordId);
  }, [searchFilter, firstMatchingRecordId, preselect]);
};
