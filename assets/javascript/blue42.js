const teamMembers = [
  {
    name: "Jason S.",
    title: "Managing Partner",
    image: "https://96bda424cfcc34d9dd1a-0a7f10f87519dba22d2dbc6233a731e5.ssl.cf2.rackcdn.com/blue42/team-members/jason.jpg"
  },{
    name: "Jennie B.",
    title: "Director of Operations",
    image: "https://3989ac5bcbe1edfc864a-0a7f10f87519dba22d2dbc6233a731e5.ssl.cf2.rackcdn.com/blue42/jenni0new0img.png"
  },{
    name: "Katie B.",
    title: "Director of Communications",
    image: "https://3989ac5bcbe1edfc864a-0a7f10f87519dba22d2dbc6233a731e5.ssl.cf2.rackcdn.com/blue42/katie.png"
  },{
    name: "Jordan B.",
    title: "Director of Digital Advertising",
    image: "https://96bda424cfcc34d9dd1a-0a7f10f87519dba22d2dbc6233a731e5.ssl.cf2.rackcdn.com/blue42/team-members/JordanB.jpg"
  },{
    name: "Sarah J.",
    title: "Director of Social Media",
    image: "https://3989ac5bcbe1edfc864a-0a7f10f87519dba22d2dbc6233a731e5.ssl.cf2.rackcdn.com/blue42/SarahJ.jpg"
  },{
    name: "Sam O.",
    title: "Director of Sales",
    image: "https://3989ac5bcbe1edfc864a-0a7f10f87519dba22d2dbc6233a731e5.ssl.cf2.rackcdn.com/blue42/SamO.jpg"
  },{
    name: "Koua T.",
    title: "Web Development Manager",
    image: "https://3989ac5bcbe1edfc864a-0a7f10f87519dba22d2dbc6233a731e5.ssl.cf2.rackcdn.com/blue42/team-members/kouacropped-01.png"
  },{
    name: "Alex S.",
    title: "Web Developer",
    image: "https://3989ac5bcbe1edfc864a-0a7f10f87519dba22d2dbc6233a731e5.ssl.cf2.rackcdn.com/blue42/team-members/Alex.jpg"
  },{
    name: "Bryan B.",
    title: "Web Developer",
    image: "https://3989ac5bcbe1edfc864a-0a7f10f87519dba22d2dbc6233a731e5.ssl.cf2.rackcdn.com/blue42/team-members/bryanb.gif"
  },{
    name: "Noah H.",
    title: "Web Developer",
    image: "https://3989ac5bcbe1edfc864a-0a7f10f87519dba22d2dbc6233a731e5.ssl.cf2.rackcdn.com/blue42/170022/35628356_10211401039598434_2592891556394434560_n.jpg"
  },{
    name: "Kiran K.",
    title: "Solutions Architect",
    image: "https://96bda424cfcc34d9dd1a-0a7f10f87519dba22d2dbc6233a731e5.ssl.cf2.rackcdn.com/blue42/team-members/KiranK.jpg"
  },{
    name: "Jeff B.",
    title: "Graphic Designer",
    image: "https://96bda424cfcc34d9dd1a-0a7f10f87519dba22d2dbc6233a731e5.ssl.cf2.rackcdn.com/blue42/team-members/JeffB.jpg"
  },{
    name: "Sam M.",
    title: "Graphic Designer",
    image: "https://3989ac5bcbe1edfc864a-0a7f10f87519dba22d2dbc6233a731e5.ssl.cf2.rackcdn.com/blue42/sam-01.png"
  },{
    name: "Shenyeng X.",
    title: "Graphic Designer",
    image: "https://3989ac5bcbe1edfc864a-0a7f10f87519dba22d2dbc6233a731e5.ssl.cf2.rackcdn.com/blue42/0_(1)_copy_copy.jpg"
  },{
    name: "Josiah V.",
    title: "Graphic Designer",
    image: "https://3989ac5bcbe1edfc864a-0a7f10f87519dba22d2dbc6233a731e5.ssl.cf2.rackcdn.com/blue42/josiah.png"
  },{
    name: "Morgan M.",
    title: "Marketing Specialist",
    image: "https://3989ac5bcbe1edfc864a-0a7f10f87519dba22d2dbc6233a731e5.ssl.cf2.rackcdn.com/blue42/morgan.jpg"
  },{
    name: "Michelle Z.",
    title: "Communications Specialist",
    image: "https://3989ac5bcbe1edfc864a-0a7f10f87519dba22d2dbc6233a731e5.ssl.cf2.rackcdn.com/blue42/michelle-01.png"
  },{
    name: "Katie B.",
    title: "Digital Media Specialist",
    image: "https://3989ac5bcbe1edfc864a-0a7f10f87519dba22d2dbc6233a731e5.ssl.cf2.rackcdn.com/blue42/team-members/katieM-01.png"
  },{
    name: "Josh S.",
    title: "Lead Photographer",
    image: "https://3989ac5bcbe1edfc864a-0a7f10f87519dba22d2dbc6233a731e5.ssl.cf2.rackcdn.com/blue42/JoshGif.gif"
  },{
    name: "Tim J.",
    title: "Lead Videographer",
    image: "https://3989ac5bcbe1edfc864a-0a7f10f87519dba22d2dbc6233a731e5.ssl.cf2.rackcdn.com/blue42/TimJ.jpg"
  },{
    name: "Mark F.",
    title: "Strategic Account Manager",
    image: "https://96bda424cfcc34d9dd1a-0a7f10f87519dba22d2dbc6233a731e5.ssl.cf2.rackcdn.com/blue42/team-members/MarkF.jpg"
  },{
    name: "Barry L.",
    title: "Strategic Account Manager",
    image: "https://3989ac5bcbe1edfc864a-0a7f10f87519dba22d2dbc6233a731e5.ssl.cf2.rackcdn.com/blue42/team-members/barry-01.png"
  },{
    name: "Greg A.",
    title: "Strategic Account Manager",
    image: "https://3989ac5bcbe1edfc864a-0a7f10f87519dba22d2dbc6233a731e5.ssl.cf2.rackcdn.com/blue42/GREG-01.png"
  },
  {
    name: "Mike B.",
    title: "Strategic Account Manager",
    image: "https://via.placeholder.com/600x400"
  }
];


const displayTeam = () => {
  const teamLoc = document.getElementById("meet-the-team");
  const length = teamMembers.length;
  const last = length -1
  teamMembers.map((member,i) => {
    teamLoc.innerHTML +=
      '<div class="col-sm-6 col-md-4">' +
        '<div class="team-member">' +
          '<button class="btn-modal btn-block" data-toggle="modal" data-target="#modal' + i + '">' + 
            '<div><img src="' + member.image + '" alt="' + member.name + '" class="button-image" /></div>' +
            '<h3>' + member.name + '</h3>' +
            '<h5>' + member.title + '</h5>' +
          '</button>' +
          '<div class="modal" id="modal' + i + '" tabindex="-1" role="dialog" aria-labelledby="modal' + i + 'label" aria-hidden="true">' +
            '<div class="modal-dialog modal-dialog-centered modal-lg" role="document">' +
              '<div class="modal-content">' +
                '<div class="modal-body">' +
                  '<div class="row">' +
                    '<div class="col-md-12">' +
                      '<img src="' + member.image + '" alt="' + member.name + '" class="modal-image" />' +
                      '<div class="member-label">' +
                        '<h1>' + member.name + '</h1>' +
                        '<h3>' + member.title + '</h3>' +
                      '</div>' +
                    '</div>' +
                    '<div class="col-md-6">' +
                      '<div class="member-bio">' +
                        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis, ante nec faucibus porta, urna ipsum placerat nisl, id viverra nisl diam quis dui. Phasellus porta dapibus quam, in fringilla odio cursus eu. Fusce sagittis tristique leo, sit amet hendrerit lorem ullamcorper in. Nulla facilisis sapien eu placerat rutrum. Curabitur sem velit, aliquam quis molestie a, porttitor nec quam. Nunc porttitor imperdiet erat vitae consequat. Proin convallis, felis commodo ullamcorper iaculis, elit mi tempor neque, sit amet consectetur velit leo a nunc. Donec tristique lorem id purus luctus lobortis. Aliquam facilisis pulvinar nibh sed ultricies. Cras risus arcu, aliquet non iaculis vitae, tincidunt id nibh. Maecenas venenatis in est sit amet commodo. Nullam sollicitudin eros dui, a commodo diam ultrices vitae.</p>' +
                      '</div>' +
                    '</div>' +
                    '<div class="col-md-6">' +
                      '<div class="member-bio">' +
                        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis, ante nec faucibus porta, urna ipsum placerat nisl, id viverra nisl diam quis dui. Phasellus porta dapibus quam, in fringilla odio cursus eu. Fusce sagittis tristique leo, sit amet hendrerit lorem ullamcorper in. Nulla facilisis sapien eu placerat rutrum. Curabitur sem velit, aliquam quis molestie a, porttitor nec quam. Nunc porttitor imperdiet erat vitae consequat. Proin convallis, felis commodo ullamcorper iaculis, elit mi tempor neque, sit amet consectetur velit leo a nunc. Donec tristique lorem id purus luctus lobortis. Aliquam facilisis pulvinar nibh sed ultricies. Cras risus arcu, aliquet non iaculis vitae, tincidunt id nibh. Maecenas venenatis in est sit amet commodo. Nullam sollicitudin eros dui, a commodo diam ultrices vitae.</p>' +
                      '</div>' +
                    '</div>' +
                  '</div>' +
                '</div>' +
                '<div class="modal-footer">' +
                  '<button type="button" class="btn footer-button" data-toggle="modal" data-target="#modal' + (i === 0 ? last : i - 1) + '" data-dismiss="modal">Previous</button>' +
                  '<button type="button" class="btn footer-button" data-dismiss="modal">Close</button>' +
                  '<button type="button" class="btn footer-button" data-toggle="modal" data-target="#modal' + (i === last ? 0 : i + 1)  + '" data-dismiss="modal">Next</button>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>'
  })
};

displayTeam();
