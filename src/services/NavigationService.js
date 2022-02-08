const config = {};

export function setNavigator(navigate) {
  if (navigate) {
    config.navigate = navigate;
  }
}

export function navigate(routeName) {
  if (config.navigate && routeName) {
    config.navigate(routeName);
  }
}
