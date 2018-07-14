export interface Gql {
  query: string;
  key: string;
}

export default function(): Gql {
  var args = Array.prototype.slice.call(arguments);
  var literals = args[0];

  var result = typeof literals === "string" ? literals : literals[0];

  return {
    query: result,
    key: JSON.stringify(result)
  };
}
