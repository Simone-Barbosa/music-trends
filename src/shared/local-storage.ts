export const getUserPreferences = () => {
    if (localStorage.getItem('userPreferences')) return localStorage.getItem('userPreferences')?.split(',');

    return [];
};

export function setUserPreferences(list: string[]) {
    localStorage.setItem('userPreferences', list.toString());
}

