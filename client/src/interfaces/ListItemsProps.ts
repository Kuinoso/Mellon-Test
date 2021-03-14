import Product from "../interfaces/Product";

interface ListItemsProps {
  handleClose: () => void;
  getLineItems: (list: Product[]) => void;
  listItems: Product[];
}

export default ListItemsProps;
