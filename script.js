let candidates = {
    data: [
        {
            candidateName: 'Jamim Mehdi Hussain Khan',
            course: 'BCA',
            graduationYear: '2021',
            profileImage: './images/candidate-profile.jpg',
            candidateDesc: 'Final year BCA student at The Oxford College of Science, Bangalore with excellent problem solving skills and ability to perform in a team. Ambitious to kick start the career with a globally recognized organization which will give me exposure to enhance my skills and knowledge for mutual benefits of the organization.',
            skills: ['Fullstack', 'Frontend', 'Backend', 'React', 'Node JS', 'Mongo DB'],
            referalScore: '820',
            sortlistedCompany: '4'
        },

        {
            candidateName: 'Mokasafat Amir Behesti',
            course: 'B.Tech',
            graduationYear: '2019',
            profileImage: 'https://amirbehesti.netlify.app/assets/images/profile-image.jpg',
            candidateDesc: "I completed my B.Tech in Electrical Engineering by the mid of 2019, After that I was preparing for core Electrical jobs, and then in a span of 4-5 months COVID pandemic started. Since My teenage I'm always a Technology lover & love to explore new technologies, during pandemic many of my friends got placed with dream jobs which was a big Motivation for me. Then I set up my mind, and I started learning coding and learning new languages. I am a quick learner and eager to learn more and I am also try to most efficient in the work that i am given.",
            skills: ['Fullstack', 'Frontend', 'React', 'Node JS'],
            referalScore: '850',
            sortlistedCompany: '6'
        },

        {
            candidateName: 'SOURAV BANERJEE',
            course: 'B.Tech',
            graduationYear: '2020',
            profileImage: 'https://souravbanerjee.netlify.app/assets/images/profile-image.jpg',
            candidateDesc: "I completed my B. Tech in Computer science in 2020, just when COVID pandemic started. Didn't apply for any of college campus program because at that time i had something else in mind, which didn't went on course as i expected. After a year and a half i started practicing coding again and learning new languages. I am a quick learner and eager to learn more and i am also try to most efficient in the work that i am given.",
            skills: ['DSA', 'Backend', 'Node JS', 'Mongo DB'],
            referalScore: '840',
            sortlistedCompany: '5'
        },

        {
            candidateName: 'Jamim Mehdi Hussain Khan',
            course: 'BCA',
            graduationYear: '2021',
            profileImage: './images/candidate-profile.jpg',
            candidateDesc: 'Final year BCA student at The Oxford College of Science, Bangalore with excellent problem solving skills and ability to perform in a team. Ambitious to kick start the career with a globally recognized organization which will give me exposure to enhance my skills and knowledge for mutual benefits of the organization.',
            skills: ['Fullstack', 'Frontend', 'Backend', 'React', 'Node JS', 'Mongo DB'],
            referalScore: '820',
            sortlistedCompany: '4'
        },
    ],
};

for (let i of candidates.data) {
    //Create candidate card
    let candidateCard = document.createElement('div');
    candidateCard.classList.add('candiate');

    //Create profile-title-wrapper
    let profile_title_wrapper = document.createElement('div');
    profile_title_wrapper.classList.add('profile-title-wrapper');

    let candidate_profile_img = document.createElement('div');
    candidate_profile_img.classList.add('cand-profile-img');

    //Set profile image
    let cand_img = document.createElement('img');
    cand_img.src = i.profileImage;

    candidate_profile_img.appendChild(cand_img);

    let candidate_name_wrapper = document.createElement('div');
    candidate_name_wrapper.classList.add('cand-name-wrapper');

    let cand_name = document.createElement('p');
    cand_name.classList.add('cand-name');

    let capitalizeName = i.candidateName.toLowerCase();
    let nameArray = capitalizeName.split(' ');
    for (let k = 0; k < nameArray.length; k++) {
        
        nameArray[k] = nameArray[k].charAt(0).toUpperCase() + nameArray[k].slice(1);
    }
    let capitalizedName = nameArray.join(' ');

    cand_name.textContent = capitalizedName;

    let cand_grad = document.createElement('p');
    cand_grad.classList.add('cand-grad');
    cand_grad.textContent = `${i.course} - ${i.graduationYear}`;

    candidate_name_wrapper.appendChild(cand_name);
    candidate_name_wrapper.appendChild(cand_grad);

    let button_wrapper = document.createElement('div');
    button_wrapper.classList.add('button-wrapper');

    let button_save = document.createElement('button');
    let icon_save = document.createElement('i');
    icon_save.classList.add('bi', 'bi-bookmark-dash-fill');
    let btn_text = document.createElement('span');
    btn_text.textContent = 'Save Candidate'; 

    button_save.appendChild(icon_save);
    button_save.appendChild(btn_text);
    button_wrapper.appendChild(button_save)

    profile_title_wrapper.appendChild(candidate_profile_img);
    profile_title_wrapper.appendChild(candidate_name_wrapper);
    profile_title_wrapper.appendChild(button_wrapper)

    let candidate_desc = document.createElement('div');
    candidate_desc.classList.add('cand-desc');

    let desc = document.createElement('p');
    desc.textContent = i.candidateDesc;
    candidate_desc.appendChild(desc);

    let stack_tags = document.createElement('div');
    stack_tags.classList.add('stack-tags')
    for (j of i.skills) {
        let tags = document.createElement('div');
        tags.classList.add('tags');

        let tags_text = document.createElement('p');
        tags_text.textContent = j;

        tags.appendChild(tags_text);
        stack_tags.appendChild(tags);
    }

    let divider = document.createElement('div');
    divider.classList.add('divider');

    let stats_wrapper = document.createElement('div');
    stats_wrapper.classList.add('stats-wrapper');

    let ref_score = document.createElement('div');
    ref_score.classList.add('ref-score');

    let score_icon = document.createElement('i');
    score_icon.classList.add('bi', 'bi-bar-chart-line');

    let score_obtained = document.createElement('span');
    score_obtained.classList.add('score-obtained');
    score_obtained.textContent = i.referalScore;

    let total_score = document.createElement('span');
    total_score.classList.add('total-score');
    total_score.textContent = '/1000';

    ref_score.appendChild(score_icon);
    ref_score.appendChild(score_obtained);
    ref_score.appendChild(total_score);

    stats_wrapper.appendChild(ref_score);

    let shortlisted_wrapper = document.createElement('div');
    shortlisted_wrapper.classList.add('shortlisted-wapper');

    let company_icon = document.createElement('i');
    company_icon.classList.add('bi', 'bi-building');

    let short_com = document.createElement('span');;
    short_com.classList.add('sort-com');
    short_com.textContent = i.sortlistedCompany;

    let sort_text = document.createElement('span');
    sort_text.classList.add('sort-text');
    sort_text.textContent = 'Company sortlisted';

    shortlisted_wrapper.appendChild(company_icon);
    shortlisted_wrapper.appendChild(short_com);
    shortlisted_wrapper.appendChild(sort_text);

    stats_wrapper.appendChild(shortlisted_wrapper);

    let sortlist_btn = document.createElement('div');
    sortlist_btn.classList.add('sortlist-btn');

    let sortlist_btn_btn = document.createElement('button');
    sortlist_btn_btn.textContent = 'Sortlist dandidate';

    sortlist_btn.appendChild(sortlist_btn_btn);

    stats_wrapper.appendChild(sortlist_btn);

    candidateCard.appendChild(profile_title_wrapper);
    candidateCard.appendChild(candidate_desc);
    candidateCard.appendChild(stack_tags);
    candidateCard.appendChild(divider);
    candidateCard.appendChild(stats_wrapper);

    let cardWrapper = document.querySelector('.candidate-wrapper');

    cardWrapper.appendChild(candidateCard);
}

let container = document.querySelectorAll('.candiate');
console.log(container);