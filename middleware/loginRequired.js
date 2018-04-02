export default function ({ app, redirect }) {
  if (!app.$auth0.isAuthenticated()) {
    return redirect('/user/login')
  }
}
