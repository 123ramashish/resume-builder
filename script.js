// Line break character
const br = "\n";

// Query selectors for various elements
const nameheading = document.querySelector(".name>h2");
const nameinput = document.querySelector("#name");
const experiance = document.querySelector(".experiance");
const company_name = document.querySelector("#company-name");
const company_location = document.querySelector("#company-location");
const job_title = document.querySelector("#job-title");
const job_starting_date = document.querySelector("#job-starting-date");
const job_discription = document.querySelector("#job-discription");
const more_experiance = document.querySelector("#more-experiance");
const education = document.querySelector(".education");
const school_name = document.querySelector("#school-name");
const school_location = document.querySelector("#school-location");
const degree = document.querySelector("#degree");
const degree_starting_date = document.querySelector("#degree-starting-date");
const education_discription = document.querySelector("#education-discription");
const more_education = document.querySelector("#more-education");
const project = document.querySelector(".project");
const project_name = document.querySelector("#project-name");
const project_type = document.querySelector("#project-type");
const project_discription = document.querySelector("#project-discription");
const more_project = document.querySelector("#more-project");
const address = document.querySelector(".address");
const street = document.querySelector("#street");
const city = document.querySelector("#city");
const mobile = document.querySelector("#mobile");
const email = document.querySelector("#email");
const skill_conatiner = document.querySelector(".skill-conatiner");
const skill = document.querySelector("#skill");
const skill_add = document.querySelector("#skill-add");
const award_conatiner = document.querySelector(".award-conatiner");
const award = document.querySelector("#award");
const award_discription = document.querySelector("#award-discription");
const award_add = document.querySelector("#award-add");
const language_conatiner = document.querySelector(".language-conatiner");
const language = document.querySelector("#language");
const language_add = document.querySelector("#language-add");
const generate = document.querySelector("#generate");
const footer = document.querySelector("footer");

// Event listener for adding more experiance
more_experiance.addEventListener("click", function () {
  const div = document.createElement("div");

  // Create paragraphs for each piece of experiance information
  const companyParagraph = document.createElement("p");
  companyParagraph.textContent = `Company: ${company_name.value}`;
  div.appendChild(companyParagraph);

  const locationParagraph = document.createElement("p");
  locationParagraph.textContent = `Location: ${company_location.value}`;
  div.appendChild(locationParagraph);

  const jobTitleParagraph = document.createElement("p");
  jobTitleParagraph.textContent = `Job Title: ${job_title.value}`;
  div.appendChild(jobTitleParagraph);

  const durationParagraph = document.createElement("p");
  durationParagraph.textContent = `Duration: ${job_starting_date.value}`;
  div.appendChild(durationParagraph);

  const descriptionParagraph = document.createElement("p");
  descriptionParagraph.textContent = `Description: ${job_discription.value}`;
  div.appendChild(descriptionParagraph);

  // Append the experiance div and line break to the experiance container
  experiance.appendChild(div);
  experiance.appendChild(document.createElement("br"));

  // Clear input fields after appending
  company_name.value = "";
  company_location.value = "";
  job_title.value = "";
  job_starting_date.value = "";
  job_discription.value = "";
});

// Event listener for adding more education
more_education.addEventListener("click", function () {
  // Create a div element for education
  const educationDiv = document.createElement("div");

  // Create paragraphs for each piece of education information
  const schoolNameParagraph = document.createElement("p");
  schoolNameParagraph.textContent = `School Name: ${school_name.value}`;
  educationDiv.appendChild(schoolNameParagraph);

  const locationParagraph = document.createElement("p");
  locationParagraph.textContent = `Location: ${school_location.value}`;
  educationDiv.appendChild(locationParagraph);

  const degreeParagraph = document.createElement("p");
  degreeParagraph.textContent = `Degree: ${degree.value}`;
  educationDiv.appendChild(degreeParagraph);

  const durationParagraph = document.createElement("p");
  durationParagraph.textContent = `Duration: ${degree_starting_date.value}`;
  educationDiv.appendChild(durationParagraph);

  const educationDescriptionParagraph = document.createElement("p");
  educationDescriptionParagraph.textContent = `Description: ${education_discription.value}`;
  educationDiv.appendChild(educationDescriptionParagraph);

  // Append the education div and line break to the education container
  education.appendChild(educationDiv);
  education.appendChild(document.createElement("br"));

  // Clear input fields after appending
  school_name.value = "";
  school_location.value = "";
  degree.value = "";
  degree_starting_date.value = "";
  education_discription.value = "";
});

// Event listener for adding more project
more_project.addEventListener("click", function () {
  // Create a div element for the project
  const projectDiv = document.createElement("div");

  // Create paragraphs for each piece of project information
  const projectNameParagraph = document.createElement("p");
  projectNameParagraph.textContent = `Project Name: ${project_name.value}`;
  projectDiv.appendChild(projectNameParagraph);

  const projectTypeParagraph = document.createElement("p");
  projectTypeParagraph.textContent = `Project Type: ${project_type.value}`;
  projectDiv.appendChild(projectTypeParagraph);

  const projectDescriptionParagraph = document.createElement("p");
  projectDescriptionParagraph.textContent = `Description: ${project_discription.value}`;
  projectDiv.appendChild(projectDescriptionParagraph);

  // Append the project div and line break to the project container
  project.appendChild(projectDiv);
  project.appendChild(document.createElement("br"));

  // Clear input fields after appending
  project_name.value = "";
  project_type.value = "";
  project_discription.value = "";
});

// Event listener for adding skill
skill_add.addEventListener("click", function () {
  // Create a paragraph element for the skill
  const skillParagraph = document.createElement("p");
  skillParagraph.textContent = `Skill: ${skill.value}`;

  // Append the skill paragraph and line break to the skill container
  skill_conatiner.appendChild(skillParagraph);
  skill_conatiner.appendChild(document.createElement("br"));

  // Clear input field after appending
  skill.value = "";
});

// Event listener for adding award
award_add.addEventListener("click", function () {
  // Create a div element for the award
  const awardDiv = document.createElement("div");

  // Create paragraphs for each piece of award information
  const awardNameParagraph = document.createElement("p");
  awardNameParagraph.textContent = `Award Name: ${award.value}`;
  awardDiv.appendChild(awardNameParagraph);

  const awardDescriptionParagraph = document.createElement("p");
  awardDescriptionParagraph.textContent = `Award Description: ${award_discription.value}`;
  awardDiv.appendChild(awardDescriptionParagraph);

  // Append the award div and line break to the award container
  award_conatiner.appendChild(awardDiv);
  award_conatiner.appendChild(document.createElement("br"));

  // Clear input fields after appending
  award.value = "";
  award_discription.value = "";
});

// Event listener for adding language
language_add.addEventListener("click", function () {
  // Create a paragraph element for the language
  const languageParagraph = document.createElement("p");
  languageParagraph.textContent = language.value;

  // Append the language paragraph and line break to the language container
  language_conatiner.appendChild(languageParagraph);
  language_conatiner.appendChild(document.createElement("br"));

  // Clear input field after appending
  language.value = "";
});

function addAddress() {
  // Create a div element for the address
  const addressdDiv = document.createElement("div");

  // Create paragraphs for each piece of address information
  const streetParagraph = document.createElement("p");
  streetParagraph.textContent = `Street: ${street.value}`;
  addressdDiv.appendChild(streetParagraph);

  const cityParagraph = document.createElement("p");
  cityParagraph.textContent = `City: ${city.value}`;
  addressdDiv.appendChild(cityParagraph);

  const mobileParagraph = document.createElement("p");
  mobileParagraph.textContent = `Mobile: ${mobile.value}`;
  addressdDiv.appendChild(mobileParagraph);

  const emailParagraph = document.createElement("p");
  emailParagraph.textContent = `Email: ${email.value}`;
  addressdDiv.appendChild(emailParagraph);

  // Append the address div and line break to the address container
  address.appendChild(addressdDiv);
  address.appendChild(document.createElement("br"));
}

// Function to generate resume
function generateResume() {
  if (generate.textContent === "Generate") {
    const a = document.createElement("a");
    a.setAttribute("download", "pdf");
    a.href = "http://127.0.0.1:5500/index.html";
    a.id = "download";
    a.innerText = "Download";
    a.style =
      "width:6em;padding:8px;border:none;border-radius: 6px;background-color: rgb(105, 227, 105);margin: auto;cursor:pointer;margin-bottom:1em;text-decoration:none";

    // Appending the download link to the footer
    footer.appendChild(a);

    // Hiding the generate button
    generate.style.display = "none";

    // Setting various fields with user input
    nameheading.innerText = nameinput.value;
    street.parentElement.innerText = `Street: ${street.value}`;
    city.parentElement.innerText = `City: ${city.value}`;
    mobile.parentElement.innerText = `Mobile: ${mobile.value}`;
    email.parentElement.innerText = `Email: ${email.value}`;
    more_experiance.click();
    more_education.click();
    more_project.click();
    skill_add.click();
    award_add.click();
    language_add.click();
    addAddress();

    // Hide all <button> elements
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => (button.style.display = "none"));

    // Hide all <label> elements
    const labels = document.querySelectorAll("label");
    labels.forEach((label) => (label.style.display = "none"));

    // Hide all <input> elements
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (input.style.display = "none"));

    // Hide all <textarea> elements
    const textareas = document.querySelectorAll("textarea");
    textareas.forEach((textarea) => (textarea.style.display = "none"));
  }
}

// Event listener for generate button
generate.addEventListener("click", generateResume);
