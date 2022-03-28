import MainPage from '../pages/Main';
import DetailPage from '../pages/Detail/DetailPage';
import CartPage from '../pages/Cart/CartPage';

interface PathItem {
  path: string;
  component: React.ComponentClass<any> | React.FunctionComponent<any>;
  exact: boolean;
}

export const appRoutes: PathItem[] = [
  {
    path: '/main',
    component: MainPage,
    exact: true,
  },
  {
    path: '/detail',
    component: DetailPage,
    exact: true,
  },
  {
    path: '/cart',
    component: CartPage,
    exact: true,
  },
];
