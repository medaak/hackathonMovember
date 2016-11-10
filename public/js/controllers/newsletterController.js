class newsletterController {
    constructor(newsletterService) {
        this.newsletterService = newsletterService;
        this.load();
      }

      create(newsletter) {

          this.newsletterService.create(this.newsletter.email, this.newsletter.nom).then(() => {
              this.newsletter = '';
              this.load();
          });
      }


}
