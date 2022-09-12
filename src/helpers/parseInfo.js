export const parseName = (name) => {
    name = name.split('-');
    return name[0];
}

export const parseIdFromUrl = (url) => {
    url = url.split('/');
    return Number(url.at(-2));
}