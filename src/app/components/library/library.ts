import { Component } from '@angular/core';
import { IsReadPipe } from '../../utils/is-read-pipe';
import { Book } from '../../utils/types/book.type';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-library',
  imports: [IsReadPipe,FormsModule ],
  templateUrl: './library.html',
  styleUrl: './library.css'
})

export class Library {

  library : Book[]=[ 
    {title:" Sillmarion",author: "Tokein", isRead:true},
    {title:"Harry Potter ",author: "Jk Roling", isRead: false},
    {title:" Clean Code",author: "Robert.C. Martins", isRead: true}
  ] 
    
  toggleIsRead(book: Book) :void {
         book.isRead = !book.isRead;
  
  }

  book : Book = {
    title: "",
    author: "",
    isRead: false
  }

  author : string = ""
  title : string = ""
  isSubmitted : boolean = false


  submitBook() : void  {
     this.book ={
      author:this.author,
      title :this.title,
      isRead:false,
    }
      this.library.push(this.book); 
      this.author = "";
      this.title= "";
    } 

}




