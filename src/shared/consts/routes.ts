export const routes = {
  HOME: '/',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  MEALS: '/meals',
  MEAL: (slug: string) => `/meals/${slug}`,
  SHARE: '/meals/share',
  COMMUNITY: '/community',
}
