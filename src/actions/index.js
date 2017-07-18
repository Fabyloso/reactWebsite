export function selectSection(resumeSection) {
    return {
        type: 'SECTION_SELECTED',
        payload: resumeSection
    };
}