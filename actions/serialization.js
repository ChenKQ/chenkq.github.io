function formatAuthor(authors, year){
    var htmlstr = "";
    var num = authors.length;
    var i =0 ;
    for(i=0; i<num; i++){
        author = authors[i];
        if(author.surname=="Chen" && (author.name=="Kaiqiang" || author.name=="K.")){
            htmlstr += "<b>";
            htmlstr += author.surname;
            htmlstr += ", ";
            htmlstr += author.name[0];
            htmlstr += ".";
            htmlstr += "</b>";
        }
        else{
            htmlstr += author.surname;
            htmlstr += ", ";
            htmlstr += author.name[0];
            htmlstr += ".";
        }
        if(i<num-1){
            htmlstr += "; ";
        }
        else{
            htmlstr += " (";
            htmlstr += year;
            htmlstr += ").\n";
        }
    }
    return htmlstr;
}

function formatTitle(ref){
    htmlstr = "<span style=\"color:#61c504e7\">";
    htmlstr += ref.title;
    htmlstr += "</span>.\n";
    return htmlstr;
}

function formatJournal(ref){
    htmlstr = ref.journal;
    htmlstr += ", vol. ";
    htmlstr += ref.volume;
    if(ref.number!=""){
        htmlstr += ", no. ";
        htmlstr += ref.number;
    }
    else if(ref.issue!=""){
        htmlstr += ", no. ";
        htmlstr += ref.issue;
    }
    htmlstr += ", pp.";
    htmlstr += ref.pages;
    htmlstr += ".";
    return htmlstr;
}

function formatInproceeding(ref){
    htmlstr = ref.booktitle;
    htmlstr += "; "
    htmlstr += ref.city;
    htmlstr += ", ";
    htmlstr += ref.country;
    htmlstr += "; "
    if(ref.volume!=""){
        htmlstr += "vol. ";
        htmlstr += ref.volume;
        if(ref.number!=""){
            htmlstr += ", no. ";
            htmlstr += ref.number;
        }
        else if(ref.issue!=""){
            htmlstr += ", no. ";
            htmlstr += ref.issue;
        }
        htmlstr += ", ";
    }
    htmlstr += "pp.";
    htmlstr += ref.pages;
    htmlstr += ".";
    return htmlstr;
}

function formatDOI(ref){
    if(ref.status!="published"){
        htmlstr = " (";
        htmlstr += ref.status;
        htmlstr += ")\n";
        return htmlstr;
    }

    if(ref.doi!=""){
        htmlstr = "\n<a href=\"https://doi.org/";
        htmlstr += ref.doi;
        htmlstr += "\"> doi:";
        htmlstr += ref.doi;
        htmlstr += "</a>\n";
        return htmlstr;
    }
    return "";
    
}

function genHtml4Ref(ref, index){
    if(index%2==0){
        htmlstr = "<blockquote>\n";
    }
    else{
        htmlstr = "<blockquote style=\"background:#eeeeee\">\n";
    }
    htmlstr += formatAuthor(ref.author, ref.year);
    htmlstr += formatTitle(ref);
    if(ref.type=="journal"){
        htmlstr += formatJournal(ref);
    }
    else{
        htmlstr += formatInproceeding(ref);
    }
    htmlstr += formatDOI(ref);
    htmlstr += "</blockquote>\n"
    return htmlstr;
}

function insertPublicationHtml(publications){
    var num=publications.length;
    var i=0;
    var htmlstr = "<h3>Publications</h3>\n";
    for(i=0; i<num; i++){
        htmlstr += genHtml4Ref(publications[i],i);
    }
    return htmlstr;
}
