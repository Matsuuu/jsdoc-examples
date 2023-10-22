
/**
 * @param { string } url
 * */
export async function apiCall(url) {
    const response = await fetch(url);
    return response.json();
}

/** @type { import("./types").Account } */
export const account = await apiCall("/account/1");

/** @type { import("./types").Product } */
export const product = await apiCall("product/1");
