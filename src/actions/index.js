export function selectSection(resumeSection) {
    // selectBook is an ActionCreator, it needs to return an action,
    // an object with a type property.
    return {
        type: 'SECTION_SELECTED',
        payload: book
    };
}