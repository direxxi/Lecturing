function showDepartment(department) {
    var container = document.getElementById('department-container');
    var departmentListItems = document.querySelectorAll('.list_teams li');
    container.innerHTML = ''; 

    departmentListItems.forEach(function(item) {
        item.classList.remove('active-department');
    });

    var activeItem = Array.from(departmentListItems).find(item => item.textContent === department);
    if (activeItem) {
        activeItem.classList.add('active-department');
    }

   
    var members = {
        'Lecturers': [
            { name: 'Emily Johnson', teaches: 'Mathematics', image: 'Farmer Man 1940S - Free photo on Pixabay.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Michael Smith', teaches: 'Physics', image: '1+ Free Skin+Care+Portrait+Photography & Donut Images.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Emma Thompson', teaches: 'Mathematics', image: 'Billy The Kid.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'David White', teaches: 'Physics', image: 'crB8NTpy.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Isabella Anderson', teaches: 'Art Education', image: 'Happy female startup employees.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Matthew Taylor', teaches: 'Music Theory', image: 'He’s… Mercurial_ Shear talent. A genius. One of the leading actors in the world. An incredibly formidable presence.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Ava Thomas', teaches: 'Physical Education', image: 'INSPIRATION 74 _ GOLDEN YELLOW — Weekend Creative.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Christopher Jackson', teaches: 'Computer Science', image: 'Jeff Bezos.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Sophia Harris', teaches: 'Environmental Science', image: 'Lionel Messi Net worth 2023.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'James Lee', teaches: 'Geography', image: 'Madelyn Cline Convinced the ‘Outer Banks’ Writers to Make Sarah Choose John B.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Mia Brown', teaches: 'Statistics', image: 'Mahershala Ali ‘I had to protect myself from people’s fear of me’.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'John Davis', teaches: 'Philosophy', image: 'Michael B Jordan on Black Panther ‘We’re giving black people power’.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Charlotte Wilson', teaches: 'Sociology', image: 'Models Photo.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Joseph Moore', teaches: 'Astronomy', image: 'People Who Mocked Chadwick Boseman For His Weight Loss Now Feel Awful And Hopefully It Teaches Them A Lesson.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Amelia Martin', teaches: 'Political Science', image: 'Untitled Photo.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Alexander Young', teaches: 'Economics', image: 'Photographer’s Guide to 40 Headshot Poses(1).jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Harper Hernandez', teaches: 'Psychology', image: 'Premium Photo Portrait of a black american handsome stylish man wearing a checkered reddish shirt holding a drink glass on a coffee break and talking on the phone on a yellow.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Benjamin King', teaches: 'Creative Writing', image: 'Reference Image - Morgan Freeman Art By Ali Haider.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Lily Wright', teaches: 'Fine Arts', image: 'rgbEo4Ay.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'William Scott', teaches: 'Theater Studies', image: 'The Kanye West Guide to God-Level Fashion.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Chloe Turner', teaches: 'Film Studies', image: 'These 6 Powder Foundations Control Oil (Without Caking Up)(1).jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
        ],
        'Teachers': [
            { name: 'Mia Brown', teaches: 'Statistics', image: 'Mahershala Ali ‘I had to protect myself from people’s fear of me’.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'John Davis', teaches: 'Philosophy', image: 'Michael B Jordan on Black Panther ‘We’re giving black people power’.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Charlotte Wilson', teaches: 'Sociology', image: 'Models Photo.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Joseph Moore', teaches: 'Astronomy', image: 'People Who Mocked Chadwick Boseman For His Weight Loss Now Feel Awful And Hopefully It Teaches Them A Lesson.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Amelia Martin', teaches: 'Political Science', image: 'Untitled Photo.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Alexander Young', teaches: 'Economics', image: 'Photographer’s Guide to 40 Headshot Poses(1).jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Harper Hernandez', teaches: 'Psychology', image: 'Premium Photo Portrait of a black american handsome stylish man wearing a checkered reddish shirt holding a drink glass on a coffee break and talking on the phone on a yellow.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Benjamin King', teaches: 'Creative Writing', image: 'Reference Image - Morgan Freeman Art By Ali Haider.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Lily Wright', teaches: 'Fine Arts', image: 'rgbEo4Ay.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'William Scott', teaches: 'Theater Studies', image: 'The Kanye West Guide to God-Level Fashion.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Chloe Turner', teaches: 'Film Studies', image: 'These 6 Powder Foundations Control Oil (Without Caking Up)(1).jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Emily Johnson', teaches: 'Mathematics', image: 'Farmer Man 1940S - Free photo on Pixabay.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Michael Smith', teaches: 'Physics', image: '1+ Free Skin+Care+Portrait+Photography & Donut Images.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Emma Thompson', teaches: 'Mathematics', image: 'Billy The Kid.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'David White', teaches: 'Physics', image: 'crB8NTpy.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Isabella Anderson', teaches: 'Art Education', image: 'Happy female startup employees.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Matthew Taylor', teaches: 'Music Theory', image: 'He’s… Mercurial_ Shear talent. A genius. One of the leading actors in the world. An incredibly formidable presence.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Ava Thomas', teaches: 'Physical Education', image: 'INSPIRATION 74 _ GOLDEN YELLOW — Weekend Creative.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
        ],
        'Private Tutors': [
            { name: 'Benjamin King', teaches: 'Creative Writing', image: 'Reference Image - Morgan Freeman Art By Ali Haider.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Lily Wright', teaches: 'Fine Arts', image: 'rgbEo4Ay.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'William Scott', teaches: 'Theater Studies', image: 'The Kanye West Guide to God-Level Fashion.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Chloe Turner', teaches: 'Film Studies', image: 'These 6 Powder Foundations Control Oil (Without Caking Up)(1).jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Emily Johnson', teaches: 'Mathematics', image: 'Farmer Man 1940S - Free photo on Pixabay.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Michael Smith', teaches: 'Physics', image: '1+ Free Skin+Care+Portrait+Photography & Donut Images.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Emma Thompson', teaches: 'Mathematics', image: 'Billy The Kid.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'David White', teaches: 'Physics', image: 'crB8NTpy.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Isabella Anderson', teaches: 'Art Education', image: 'Happy female startup employees.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Matthew Taylor', teaches: 'Music Theory', image: 'He’s… Mercurial_ Shear talent. A genius. One of the leading actors in the world. An incredibly formidable presence.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Ava Thomas', teaches: 'Physical Education', image: 'INSPIRATION 74 _ GOLDEN YELLOW — Weekend Creative.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Mia Brown', teaches: 'Statistics', image: 'Mahershala Ali ‘I had to protect myself from people’s fear of me’.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'John Davis', teaches: 'Philosophy', image: 'Michael B Jordan on Black Panther ‘We’re giving black people power’.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Charlotte Wilson', teaches: 'Sociology', image: 'Models Photo.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Joseph Moore', teaches: 'Astronomy', image: 'People Who Mocked Chadwick Boseman For His Weight Loss Now Feel Awful And Hopefully It Teaches Them A Lesson.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Amelia Martin', teaches: 'Political Science', image: 'Untitled Photo.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Alexander Young', teaches: 'Economics', image: 'Photographer’s Guide to 40 Headshot Poses(1).jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Harper Hernandez', teaches: 'Psychology', image: 'Premium Photo Portrait of a black american handsome stylish man wearing a checkered reddish shirt holding a drink glass on a coffee break and talking on the phone on a yellow.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Benjamin King', teaches: 'Creative Writing', image: 'Reference Image - Morgan Freeman Art By Ali Haider.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Lily Wright', teaches: 'Fine Arts', image: 'rgbEo4Ay.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'William Scott', teaches: 'Theater Studies', image: 'The Kanye West Guide to God-Level Fashion.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
           
        ],
        
        'Student Teachers': [
            { name: 'Emily Johnson', teaches: 'Mathematics', image: 'Farmer Man 1940S - Free photo on Pixabay.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Michael Smith', teaches: 'Physics', image: '1+ Free Skin+Care+Portrait+Photography & Donut Images.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Emma Thompson', teaches: 'Mathematics', image: 'Billy The Kid.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'David White', teaches: 'Physics', image: 'crB8NTpy.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Isabella Anderson', teaches: 'Art Education', image: 'Happy female startup employees.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Matthew Taylor', teaches: 'Music Theory', image: 'He’s… Mercurial_ Shear talent. A genius. One of the leading actors in the world. An incredibly formidable presence.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Ava Thomas', teaches: 'Physical Education', image: 'INSPIRATION 74 _ GOLDEN YELLOW — Weekend Creative.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Christopher Jackson', teaches: 'Computer Science', image: 'Jeff Bezos.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Sophia Harris', teaches: 'Environmental Science', image: 'Lionel Messi Net worth 2023.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'James Lee', teaches: 'Geography', image: 'Madelyn Cline Convinced the ‘Outer Banks’ Writers to Make Sarah Choose John B.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Mia Brown', teaches: 'Statistics', image: 'Mahershala Ali ‘I had to protect myself from people’s fear of me’.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'John Davis', teaches: 'Philosophy', image: 'Michael B Jordan on Black Panther ‘We’re giving black people power’.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Charlotte Wilson', teaches: 'Sociology', image: 'Models Photo.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Joseph Moore', teaches: 'Astronomy', image: 'People Who Mocked Chadwick Boseman For His Weight Loss Now Feel Awful And Hopefully It Teaches Them A Lesson.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Amelia Martin', teaches: 'Political Science', image: 'Untitled Photo.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Alexander Young', teaches: 'Economics', image: 'Photographer’s Guide to 40 Headshot Poses(1).jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Harper Hernandez', teaches: 'Psychology', image: 'Premium Photo Portrait of a black american handsome stylish man wearing a checkered reddish shirt holding a drink glass on a coffee break and talking on the phone on a yellow.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Benjamin King', teaches: 'Creative Writing', image: 'Reference Image - Morgan Freeman Art By Ali Haider.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Lily Wright', teaches: 'Fine Arts', image: 'rgbEo4Ay.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'William Scott', teaches: 'Theater Studies', image: 'The Kanye West Guide to God-Level Fashion.jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
            { name: 'Chloe Turner', teaches: 'Film Studies', image: 'These 6 Powder Foundations Control Oil (Without Caking Up)(1).jpg', socials: { facebook: '#', instagram: '#', twitter: '#', youtube: '#' } },
        
        ],
    };


    if (members[department]) {
        members[department].forEach(function(member) {
            var card = document.createElement('div');
            card.className = 'department-card';

            var img = document.createElement('img');
            img.src = member.image;
            img.alt = member.name;
            card.appendChild(img);

            var name = document.createElement('h3');
            name.textContent = member.name;
            card.appendChild(name);

            var teaches = document.createElement('p');
            teaches.textContent = 'Teaches: ' + member.teaches;
            card.appendChild(teaches);

            var socials = document.createElement('div');
            socials.className = 'social';
            Object.keys(member.socials).forEach(function(socialNetwork) {
                var link = document.createElement('a');
                link.href = member.socials[socialNetwork];
                var icon = document.createElement('i');
                icon.className = 'bx bxl-' + socialNetwork;
                link.appendChild(icon);
                socials.appendChild(link);
            });
            card.appendChild(socials);

            container.appendChild(card);
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    showDepartment('Lecturers');
});
