import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  let q = {
  data: {
    questions: [
      {
        question: "A tissue is made with?",
        choice1:"(A) a group of separate organs that coordinates in their activities",
        choice2:"(B) a group of cells which are similar in function and structure",
        choice3:"(C) layer of cells that surrounding an organ",
        choice4:"(D) sheet of cells that is one layer thick",
        votes: 7,
        searchTerms: "tissue"
      },
      {
        question: "The wall of cork cells are heavily thickned by the deposition of?",
        choice1:"(A) Cutin",
        choice2:"(B) Suberin",
        choice3:"(C) Lignin",
        choice4:"(D) Pectin",
        votes: 4,
        searchTerms: "wall, cells"
      },
      {
        question: "Which muscle cell is spindle shaped?",
        choice1:"(A) Smooth muscle cell",
        choice2:"(B) Straited muscle cell",
        choice3:"(C) Cardiac muscle cell",
        choice4:"(D) None of these are correct",
        votes: 0,
        searchTerms: "muscle, cell"
      },
      {
        question: "Blood is formed of ?",
         choice1:"(A) Smooth muscle cell",
        choice2:"(B) Straited muscle cell",
        choice3:"(C) Cardiac muscle cell",
        choice4:"(D) None of these are correct",
        votes: -1,
        searchTerms: "blood"
      },
      {
        question: "Myelin sheath is a layer covering- ",
        choice1:"(A) Plasma and bone marrow cells",
        choice2:"(B) Plasma, white & red blood cells and blood platelets.",
        choice3:"(C) Plasma & WBC",
        choice4:"(D) Plasma & RBC",
        votes: -3,
        searchTerms: "myelin, sheath, 700"
      },
      {
        question: "Adipose tissues store- ",
        choice1:"(A) Protein",
        choice2:"(B) Carbohydrate",
        choice3:"(C) Fat droplets",
        choice4:"(D) All of the above",
        votes: -3,
        searchTerms: "adipose, tissue"
      },
      {
        question: "Contraction and relaxation are unique features of",
        choice1:"(A) Epiblema",
        choice2:"(B) Velamen",
        choice3:"(C) Cuticle",
        choice4:"(D) Cork",
        votes: -3,
        searchTerms: "contraception, relaxation"
      },
      {

        question: "A protective noncellular layer found on the outside of plant organ is- ",
        choice1:"(A) Epiblema",
        choice2:"(B) Velamen",
        choice3:"(C) Cuticle",
        choice4:"(D) Cork",
        votes: -3,
        searchTerms: "protective, cell, outside, plant, organ"
      },
      {

        question: "Contraction and relaxation are unique features of- ",
        choice1:"(A) Epithelial tissue",
        choice2:"(B) Connective tissue",
        choice3:"(C) Muscle tissue",
        choice4:"(D) Nervous tissue",
        votes: -3,
        searchTerms: "contraception, relaxation"
      },
       {

        question: "Specialised parenchyma occuring in aquatic plants is - ",
        choice1:"(A) Prosenchyma",
        choice2:"(B) Chlorenchyma",
        choice3:"(C) Aerenchyma",
        choice4:"(D) None",
        votes: -3,
        searchTerms: "specialised, aquatic, plants, parenchyma"
      },
       {

        question: "Root hair are-",
         choice1:"(A) unicellular",
        choice2:"(B) multicellular",
        choice3:"(C) acellular",
        choice4:"(D) mixed type",
        votes: -3,
        searchTerms: "root, hair"
      },



    ],
    searchString: ""
  },

  methods: {
    vote: function(voteType, question) {
      if(voteType === "up") {
        question.votes++;

      } else if(voteType === "down") {
        if(question.votes <= -10) {
          return;
        }

        question.votes--;
      }
    },

    resetSearch: function() {
      this.searchString = "";
    }
  },

  filters: {
    voteColor: function(votes) {
      if(votes === 0) {
        votes = "gray";
      } else if(votes < 1) {
        votes = "red";
      } else if(votes >= 1 && votes <= 4) {
        votes = "yellow";
      } else if(votes >= 5) {
        votes = "green";
      }

      return votes;
    }
  }
};

}
