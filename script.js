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
            graduationYear: '2020',
            profileImage: './images/candidate-profile.jpg',
            candidateDesc: 'Final year BCA student at The Oxford College of Science, Bangalore with excellent problem solving skills and ability to perform in a team. Ambitious to kick start the career with a globally recognized organization which will give me exposure to enhance my skills and knowledge for mutual benefits of the organization.',
            skills: ['Fullstack', 'Frontend', 'Backend', 'React', 'Node JS', 'Mongo DB'],
            referalScore: '820',
            sortlistedCompany: '4'
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
    cand_name.textContent = i.candidateName;

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