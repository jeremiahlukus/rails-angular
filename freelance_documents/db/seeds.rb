# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#

10.times do |d|
  FreelanceDocument.create(title: "Document #{d}", 
                          description: "Spicy jalapeno drumstick shankle turducken bacon short 
                          ribs kielbasa. Pig spare ribs jowl boudin drumstick. Brisket drumstick 
                          meatloaf chicken, bacon cow kevin tail spare ribs kielbasa. Shank alcatra 
                          short ribs sausage, frankfurter tail brisket pork loin hamburger salami ham 
                          ham hock fatback turducken. Turducken biltong boudin jerky.", 
                          file_url: "https://docs.google.com/document/d/104vzbtyoHl3syc6PHHk4KlmcbtloF76mo7jhL-HDcio/edit?usp=sharing",
                          image_url: "https://pakwired.com/wp-content/uploads/2017/10/Freelancer-No-credit.jpg", 
                         )
end
