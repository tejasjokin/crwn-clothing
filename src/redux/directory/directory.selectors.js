import { createSelector } from 'reselect';

export const selectDirectory = state => state.directory;

export const selectSections = createSelector(
	[selectDirectory],
	(section) => section.sections
);