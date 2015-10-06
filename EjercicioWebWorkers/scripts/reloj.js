var reloj = new Date();

function insular() {
    reloj.setHours(reloj.getHours() + 1);
    self.postMessage(reloj.toJSON());
}
