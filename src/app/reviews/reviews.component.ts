import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Suggestion } from './Suggestion';

@Component({
  templateUrl: './reviews.component.html',
  styles: [
    ".validation-error {color: red; font-weight: bold;}"
  ]
})
export class ReviewsComponent  {
  model:any = { }
  // keep track of if we're creating or editing a review
  reviewBeingEdited= false; // keep track of what review is being edited
  reviewBeingCreated = false; // keep track of review being created

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

  constructor() { }

  ngOnInit() {
  }

  editReview(review) {
    //Updates editing flag to true
    this.reviewBeingEdited = true;

    // might need more parameters than just the review...
    this.model = {...review};
  }

  createReview() {
    //Object with new review
    const newReview = {
      flop: this.model.flop,
      stars: this.model.stars,
      review: this. model.review
    }

    //Add object to review array
    this.reviews.push(newReview);
  }

  resetForm(form) {
    // reset the form
    //Clear model
    this.model = {};

    //Reset reviewBeingEdited & reviewBeingCreated
    this.reviewBeingEdited= false;
     this.reviewBeingCreated = false;

    //Toggle form submitted variable
    this.formSubmitted = false;
    
    //Reset form state
    form.markAsUntouched();
    form.markAsPristine();
  }

  submitForm(form) {
    //toggleFormSubmitted variable
    this.formSubmitted = true;

    if (form.valid) {

        // update the edited review, or create a new one
      if (this.reviewBeingEdited) {
        //Find review to edit
        const review = this.reviews.find(review => review.flop === this.model.flop);

        //Update review
        review.flop = this.model.flop;
        review.stars = this.model.stars;
        review.review = this.model.review
      } else {
        this.createReview();
        this.resetForm(form.form);
      }
    }
  }

  toggleCreateForm() {
    //Clear current model
    this.model = {};

    //Update reviewBeingCreated flag
    this.reviewBeingCreated = true;
    
  }

  cancel(form) {
    // cancel the edit/create and hide the form
    this.resetForm(form);
  }

}





