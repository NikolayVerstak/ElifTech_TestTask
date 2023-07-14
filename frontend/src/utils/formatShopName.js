export function formatShopName(shopName) {
    // Remove special symbols and convert to lowercase
    return shopName
        .replace(/[^a-zA-Z0-9\s]/g, "")
        .replace(/\s/g, "-")
        .toLowerCase();
}
