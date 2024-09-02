export const routes = {
  HOME: '/',
  MEALS: '/meals',
  MEAL: (slug: string) => `/meals/${slug}`,
  SHARE: '/meals/share',
  COMMUNITY: '/community',
}
