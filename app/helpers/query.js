const incrementalQuery = ({
  table,
  column,
  index,
  value,
}) => `
  INSERT INTO ${table}(${column}, views)
    VALUES (${value}, 1) 
    ON CONFLICT(${index}) 
      DO UPDATE
    SET views = ${table}.views + 1
`;

module.exports = { incrementalQuery };
