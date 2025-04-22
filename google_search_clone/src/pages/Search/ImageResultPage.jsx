// ImageSearchResults.jsx
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

const ImageSearchResults = () => {
  const { search } = useLocation();
  const { q } = queryString.parse(search);

  return (
    <div>
      <h2>Showing results for image:</h2>
      <img src={q} alt="Uploaded Preview" style={{ width: "100%", maxWidth: "300px" }} />

      {/* Simulate related products */}
      <h3>Related Products</h3>
      {/* Dummy loop */}
      {[1,2,3].map(id => (
        <div key={id} style={{ marginBottom: "10px" }}>
          <img src={q} alt="dummy result" width={100} />
          <p>Product #{id}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageSearchResults;
