function slugify(title) {
 
 const slug = title.toLowerCase().split(' ').join('-');
  
 return slug;
 
}