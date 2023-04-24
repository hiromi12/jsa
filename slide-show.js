/**
 * @author Hiromi Honda
 */

// Slide show
const images = document.getElementById("images");
const duration = 200;
const options = {
  duration: duration,
};

const forwardKeyframes = [
  { transform: 'translateX(-25%)' },
  { transform: 'translateX(-75%)' }];

const backwardKeyframes = [
  { transform: 'translateX(-75%)' },
  { transform: 'translateX(-25%)' }];

function slide() {
  let animation = images.animate(forwardKeyframes, { duration: duration });
  animation.onfinish = caterpillar;
}

function caterpillar() {
  images.appendChild(images.children[0]);
}

let auto = setInterval(slide, 2000);

function next() {
  clearInterval(auto);
  let animation = images.animate(forwardKeyframes, { duration: duration });
  animation.onfinish = caterpillar;
  auto = setInterval(slide, 2000);
}

const reverse_keyframes = [
  { transform: 'translateX(-75%)' },
  { transform: 'translateX(-25%)' }];

function before() {
  // stop auto slide show
  if (auto) {
    clearInterval(auto);
  }
  let lastChild = images.children[images.children.length - 1];
  images.insertBefore(lastChild, images.children[0]);

  let change_img = images.animate(reverse_keyframes, options);
  auto = setInterval(slide, 2000);
}
