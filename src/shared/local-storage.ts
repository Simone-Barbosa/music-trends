import { CheckboxValueType } from "antd/es/checkbox/Group";

export const getUserPreferences = () => {
    if (localStorage.getItem('userPreferences')) return localStorage.getItem('userPreferences')?.split(',') as string[];

    return [];
};

export function setUserPreferences(list: CheckboxValueType[]) {
    localStorage.setItem('userPreferences', list.toString());
}

