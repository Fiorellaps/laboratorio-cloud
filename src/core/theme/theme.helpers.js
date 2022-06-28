const camelToKebabCase = (value) => value.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
export const getStylesFromObject = (typography) => Object.entries(typography).reduce((styles, [key, value]) => {
    const style = camelToKebabCase(key);
    return `
      ${styles}
      ${style}: ${value};
    `;
}, '');
export const getClassName = (name) => `.${name}`;
//# sourceMappingURL=theme.helpers.js.map