// const MediaQ = () => {
//   const phone = ({ ...styles }) => {
//     return `@media-query(min-width: 576px){
//             ${styles}
//         }`;
//   };

//   return { phone };
// };
// export default MediaQ;
export const phone = (...styles) => {
  return `@media (min-width:576px){
            ${styles};
        }`;
};
