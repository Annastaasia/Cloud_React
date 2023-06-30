import { useLocation } from 'react-router-dom';


export const pagePaths: IPages[] = [
  {
    path: '/registr/step1',
    label: 'step1',
    percentage: 0,
  },
  {
    path: '/registr/step2',
    label: 'step2',
    percentage: 50,
  },
  {
    path: '/registr/step3',
    label: 'step3',
    percentage: 100,
  },
]

export function getMatchingPage() {
  const location = useLocation();
  return pagePaths.find((page) => page.path === location.pathname)
}
