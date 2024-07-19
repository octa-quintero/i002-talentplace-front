const formatDateLocal = (dateString) => {

    const backendDate = new Date(dateString);
    const localDate = new Date(backendDate.getTime() - backendDate.getTimezoneOffset() * 60000);
    const localDateFormat = localDate.toLocaleDateString();
    return localDateFormat;
}
export default formatDateLocal;