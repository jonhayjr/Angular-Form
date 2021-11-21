import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Suggestion } from './Suggestion';

@Component({
  templateUrl: './reviews.component.html',
  styles: [
    ".validation-error {color: red;}"
  ]
})
export class ReviewsComponent  {
  model:any = { }
  // keep track of if we're creating or editing a review
  reviewBeingEdited; // keep track of what review is being edited
 

  formSubmitted = false; //keeps track of form submission

  numbers = [1,2,3,4,5] // being clever about displaying stars on the review

  reviews: any[] = [
    { flop: "Cats", stars: 3, review: "Fantastic flop! Loved the graphics and the singing!!!" },
    { flop: "Spider-Man 3", stars: 5, review: "Loved the dancing. Some of the best" },
    { flop: "Twilight", stars: 2, review: "Those Vampires were just too scary." },
  ]

  flopList = [
    {title: "Battlefield Earth"},
    {title: "Santa Clause Conquers the Martians"},
    {title: "The Room"},
    {title: "Howard the Duck"},
    {title: "Jack and Jill"},
    {title: "Cats"},
    {title: "Dudley Do-Right"},
    {title: "Batman and Robin"},
    {title: "Catwoman"},
    {title: "The Last Airbender"},
    {title: "Spider-Man 3"},
    {title: "Transformers: Revenge of the Fallen"},
    {title: "Twilight"},
    {title: "Wing Commander"},
  ]
  //Keep track of editing and creating events
  creating = false;
  editing = false;

  constructor() { }

  ngOnInit() {
  }

  editReview(review) {
    //Updates editing flag to true
    this.editing = true;

    //Set reviewBeingEdited
    this.reviewBeingEdited = review;

    // might need more parameters than just the review...
    this.model = {...review};
  }

  createReview() {
    //Add object to review array
    this.reviews.push(this.model);
  }

  resetForm(form) {
    // reset the form
    //Clear model
    this.model = {};

    //Resets editing and creating variables
    this.editing = false;
     this.creating = false;

    //Reset reviewBeingEdited
    this.reviewBeingEdited = '';

    //Toggle form submitted variable
    this.formSubmitted = false;
    
    //Reset form state
    form.markAsUntouched();
    form.markAsPristine();
  }

  updateReview() {
    //Update review
    this.reviewBeingEdited.flop = this.model.flop;
    this.reviewBeingEdited.stars = this.model.stars;
    this.reviewBeingEdited.review = this.model.review
  }

  submitForm(form) {
    //toggleFormSubmitted variable
    this.formSubmitted = true;

    if (form.valid) {
        // update the edited review, or create a new one
      if (this.editing) {
        //Update review
        this.updateReview();
      } else {
        //Create form
        this.createReview();
      }
      //Resets form
      this.resetForm(form.form);
    }
  }

  toggleCreateForm() {
    //Clear current model
    this.model = {};

    //Update reviewBeingCreated flag
    this.creating = true;
    
  }

  cancel(form) {
    // cancel the edit/create and hide the form
    this.resetForm(form);
  }

}





