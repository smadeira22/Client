const displayAlert = resp => {
    /*const alertPlaceholder = document.getElementById('liveAlertPlaceholder')*/
  
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-danger alert-dismissible" role="alert">`,
      `   <div class="me-3"><span class="text-primary">${new URL(resp.url).pathname}</span> is not a valid endpoint</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder.append(wrapper)
  }
  
  module.exports = {
    displayAlert
  }