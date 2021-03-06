let projectIndex = 1;
showProjects(projectIndex);

function switchToAdjacentProject(n) {
  showProjects(projectIndex += n);
}

function goToProject(n) {
  showProjects(projectIndex = n);
}

function showProjects(n) {
  var projects = document.getElementsByClassName("project"),
      dots = document.getElementsByClassName("dot"),
      numberOfProjects = projects.length;

  if(n > numberOfProjects) {
    projectIndex = 1;
  } else if(n < 1) {
    projectIndex = numberOfProjects;
  }

  for(let i = 0; i < numberOfProjects; i++) {
    projects[i].style.display = "none"; 
  }

  for(let i = 0; i < numberOfProjects; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  projects[projectIndex-1].style.display = "block"; 
  dots[projectIndex-1].className += " active";
}