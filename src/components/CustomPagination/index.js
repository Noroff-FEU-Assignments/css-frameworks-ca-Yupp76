import Pagination from "react-bootstrap/Pagination";

const CustomPagination = ({ active, max }) => {
  const items = [];
  for (let number = 1; number <= max; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return <Pagination size="lg">{items}</Pagination>;
};

export default CustomPagination;
