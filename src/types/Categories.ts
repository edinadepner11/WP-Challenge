interface Category {
  id: string;
  name: string;
  slug: string;
  iconUrl: string;
  activeFrom: string | undefined;
  activeUntil: string | undefined;
  createdAt: string;
  updatedAt: string;
}

export default Category;
