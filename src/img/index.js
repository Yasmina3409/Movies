const images = {};
const importAll = (r) => {
    r.keys().forEach((key) => (images[key] = r(key)));
};
importAll(require.context('', false, /\.(png|jpg|svg)$/));

export default images;