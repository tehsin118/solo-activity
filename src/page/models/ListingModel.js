// ListingModel.js

class ListingModel {
  constructor(listingData) {
    this.title = listingData.Title || "";
    this.provider = listingData.Provider || "";
    this.highlights = listingData.Highlights || "";
    this.headerImage = listingData.HeaderImage || null;
    this.location = listingData.Location || "";
    this.shortDescription = listingData.ShortDescription || "";
    this.extendedDescription = listingData.ExtendedDescription || "";
    this.ageRequirement = listingData.AgeRequirement || null;
    this.equipment = listingData.Equipment || "";
    this.maxPeople = listingData.MaxPeople || null;
    this.minPeople = listingData.MinPeople || null;
    this.price = listingData.Price || null;
    this.duration = listingData.Duration || null;
    this.openingHours = listingData.OpeningHours || [];
    this.additionalInfo = listingData.AdditionalInfo || "";
    this.email = listingData.Email || "";
    this.phone = listingData.Phone || "";
    this.website = listingData.Website || "";
    this.pictures = listingData.Pictures || [];
    this.popularity = listingData.Popularity || null;
    this.language = listingData.Language || "";
    this.reviews = listingData.Reviews || [];
    this.rating = listingData.Rating || null;
    this.categories = listingData.Categories || "";
    this.detailCategories = listingData.DetailCategories || "";
  }
}

export default ListingModel;
