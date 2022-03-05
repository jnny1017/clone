import MainPage from '../pages/main/MainPage';

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
];
