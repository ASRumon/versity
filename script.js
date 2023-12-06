document.addEventListener("DOMContentLoaded", function () {
    // Define the image data in a JavaScript object
    const imageList = [
        { src: "https://i.postimg.cc/x1vg8VVm/Screenshot-2023-10-12-194455.png", alt: "Notice 1" },
        { src: "https://i.postimg.cc/mg9ZFVmC/Screenshot-2023-10-12-194559.png", alt: "Notice 2" },
        { src: "https://i.postimg.cc/8cmJx6KX/Screenshot-2023-10-12-200129.png", alt: "Notice 3" },
        


        // Add more image data as needed
    ];

    const noticeBar = document.getElementById("noticeBar");

    // Loop through the image data and create anchor elements with images
    imageList.forEach(imageData => {
        const anchor = document.createElement("a");
        

        const img = document.createElement("img");
        img.src = imageData.src;
        img.alt = imageData.alt;
        img.className = "notice-image";

        anchor.appendChild(img);
        noticeBar.appendChild(anchor);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const subjectDropdown = document.getElementById("subjectDropdown");
    const paperDropdown = document.getElementById("paperDropdown");
    const chapterDropdown = document.getElementById("chapterDropdown");

    // Define the available chapters for each subject
    const chapters = {
        physics: ["chapter1", "chapter2", "chapter3","chapter4", "chapter5", "chapter6","chapter7", "chapter8", "chapter9", "chapter10","chapter11"],
        math: ["chapter1", "chapter2", "chapter3","chapter4", "chapter5", "chapter6","chapter7", "chapter8", "chapter9", "chapter10","chapter11"],
        chemistry: ["chapter1", "chapter2", "chapter3","chapter4", "chapter5"],
        biology: ["chapter1", "chapter2", "chapter3","chapter4", "chapter5", "chapter6","chapter7", "chapter8", "chapter9", "chapter10","chapter11","chapter12"]
    };


    

    // Function to update chapter options based on the selected subject
    function updateChapterOptions() {
        const selectedSubject = subjectDropdown.value;
        chapterDropdown.innerHTML = ''; // Clear previous options

        chapters[selectedSubject].forEach(chapter => {
            const option = document.createElement("option");
            option.value = chapter;
            option.text = chapter;
            chapterDropdown.appendChild(option);
        });
    }

    // Initially update chapter options based on the default selected subject
    updateChapterOptions();

    // Event listener for subject dropdown changes
    subjectDropdown.addEventListener("change", updateChapterOptions);
});


// Rest of your existing JavaScript code for dropdowns and redirection
document.getElementById("enterButton").addEventListener("click", function () {
    var subject = document.getElementById("subjectDropdown").value;
    var paper = document.getElementById("paperDropdown").value;
    var chapter = document.getElementById("chapterDropdown").value;

    if (subject === "physics" && paper === "firstPaper" && chapter === "chapter2") {
        window.location.href = "https://varsity23.aparsclassroom.com/Physics/Paper-1/Chapter-2";
    } 
    // else if (subject === "physics" && paper === "firstPaper" && chapter === "chapter3") {
    //     window.location.href = "link";
    // }
    else if (subject === "physics" && paper === "firstPaper" && chapter === "chapter4") {
        window.location.href = "https://varsity23.aparsclassroom.com/Physics/Paper-1/Chapter-4";
    }
    else if (subject === "physics" && paper === "firstPaper" && chapter === "chapter5") {
        window.location.href = "https://varsity23.aparsclassroom.com/Physics/Paper-1/Chapter-5";
    }
    else if (subject === "physics" && paper === "firstPaper" && chapter === "chapter6") {
        window.location.href = "https://varsity23.aparsclassroom.com/Physics/Paper-1/Chapter-6";
    }
    else if (subject === "physics" && paper === "firstPaper" && chapter === "chapter7") {
        window.location.href = "https://varsity23.aparsclassroom.com/Physics/Paper-1/Chapter-7";
    }else if (subject === "physics" && paper === "firstPaper" && chapter === "chapter8") {
        window.location.href = "https://varsity23.aparsclassroom.com/Physics/Paper-1/Chapter-8";
    }
    // else if (subject === "physics" && paper === "firstPaper" && chapter === "chapter9") {
    //     window.location.href = "link";
    // }
    else if (subject === "physics" && paper === "firstPaper" && chapter === "chapter10") {
        window.location.href = "https://varsity23.aparsclassroom.com/Physics/Paper-1/Chapter-10";
    }else if (subject === "physics" && paper === "secondPaper" && chapter === "chapter1") {
        window.location.href = "https://varsity23.aparsclassroom.com/Physics/Paper-2/Chapter-1";
    }else if (subject === "physics" && paper === "secondPaper" && chapter === "chapter2") {
        window.location.href = "https://varsity23.aparsclassroom.com/Physics/Paper-2/Chapter-2";
    }else if (subject === "physics" && paper === "secondPaper" && chapter === "chapter3") {
        window.location.href = "https://varsity23.aparsclassroom.com/Physics/Paper-2/Chapter-3";
    }
    // else if (subject === "physics" && paper === "secondPaper" && chapter === "chapter4") {
    //     window.location.href = "link";
    // }else if (subject === "physics" && paper === "secondPaper" && chapter === "chapter5") {
    //     window.location.href = "link";
    // }else if (subject === "physics" && paper === "secondPaper" && chapter === "chapter6") {
    //     window.location.href = "link";
    // }
    else if (subject === "physics" && paper === "secondPaper" && chapter === "chapter7") {
        window.location.href = "https://varsity23.aparsclassroom.com/Physics/Paper-2/Chapter-7";
    }else if (subject === "physics" && paper === "secondPaper" && chapter === "chapter8") {
        window.location.href = "https://varsity23.aparsclassroom.com/Physics/Paper-2/Chapter-8";
    }else if (subject === "physics" && paper === "secondPaper" && chapter === "chapter9") {
        window.location.href = "https://varsity23.aparsclassroom.com/Physics/Paper-2/Chapter-9";
    }else if (subject === "physics" && paper === "secondPaper" && chapter === "chapter10") {
        window.location.href = "https://varsity23.aparsclassroom.com/Physics/Paper-2/Chapter-10";
    }else if (subject === "physics" && paper === "secondPaper" && chapter === "chapter11") {
        window.location.href = "link";
    }
//gdbhmklgsfghjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
else if (subject === "physics" && paper === "firstPaper" && chapter === "chapter2") {
    window.location.href = "https://varsity23.aparsclassroom.com/Physics/Paper-1/Chapter-2";
} 
// else if (subject === "physics" && paper === "firstPaper" && chapter === "chapter3") {
//     window.location.href = "link";
// }
else if (subject === "physics" && paper === "firstPaper" && chapter === "chapter4") {
    window.location.href = "https://varsity23.aparsclassroom.com/Physics/Paper-1/Chapter-4";
}
else if (subject === "physics" && paper === "firstPaper" && chapter === "chapter5") {
    window.location.href = "https://varsity23.aparsclassroom.com/Physics/Paper-1/Chapter-5";
}
else if (subject === "physics" && paper === "firstPaper" && chapter === "chapter6") {
    window.location.href = "https://varsity23.aparsclassroom.com/Physics/Paper-1/Chapter-6";
}
else if (subject === "physics" && paper === "firstPaper" && chapter === "chapter7") {
    window.location.href = "https://varsity23.aparsclassroom.com/Physics/Paper-1/Chapter-7";
}else if (subject === "physics" && paper === "firstPaper" && chapter === "chapter8") {
    window.location.href = "https://varsity23.aparsclassroom.com/Physics/Paper-1/Chapter-8";
}else if (subject === "physics" && paper === "firstPaper" && chapter === "chapter9") {
    window.location.href = "link";
}else if (subject === "physics" && paper === "firstPaper" && chapter === "chapter10") {
    window.location.href = "https://varsity23.aparsclassroom.com/Physics/Paper-1/Chapter-10";
}else if (subject === "physics" && paper === "secondPaper" && chapter === "chapter1") {
    window.location.href = "https://varsity23.aparsclassroom.com/Physics/Paper-2/Chapter-1";
}else if (subject === "physics" && paper === "secondPaper" && chapter === "chapter2") {
    window.location.href = "https://varsity23.aparsclassroom.com/Physics/Paper-2/Chapter-2";
}else if (subject === "physics" && paper === "secondPaper" && chapter === "chapter3") {
    window.location.href = "https://varsity23.aparsclassroom.com/Physics/Paper-2/Chapter-3";
}
//else if (subject === "physics" && paper === "secondPaper" && chapter === "chapter4") {
//     window.location.href = "link";
// }else if (subject === "physics" && paper === "secondPaper" && chapter === "chapter5") {
//     window.location.href = "link";
// }else if (subject === "physics" && paper === "secondPaper" && chapter === "chapter6") {
//     window.location.href = "link";
else if (subject === "physics" && paper === "secondPaper" && chapter === "chapter7") {
    window.location.href = "https://varsity23.aparsclassroom.com/Physics/Paper-2/Chapter-7";
}else if (subject === "physics" && paper === "secondPaper" && chapter === "chapter8") {
    window.location.href = "https://varsity23.aparsclassroom.com/Physics/Paper-2/Chapter-8";
}else if (subject === "physics" && paper === "secondPaper" && chapter === "chapter9") {
    window.location.href = "https://varsity23.aparsclassroom.com/Physics/Paper-2/Chapter-9";
}else if (subject === "physics" && paper === "secondPaper" && chapter === "chapter10") {
    window.location.href = "https://varsity23.aparsclassroom.com/Physics/Paper-2/Chapter-10";
}else if (subject === "physics" && paper === "secondPaper" && chapter === "chapter11") {
    window.location.href = "link";
}
else if (subject === "chemistry" && paper === "firstPaper" && chapter === "chapter1") {
    window.location.href = "https://varsity23.aparsclassroom.com/Chemistry/Paper-2/Chapter-1";
}else if (subject === "chemistry" && paper === "firstPaper" && chapter === "chapter2") {
    window.location.href = "https://varsity23.aparsclassroom.com/Chemistry/Paper-1/Chapter-2";
} else if (subject === "chemistry" && paper === "firstPaper" && chapter === "chapter3") {
    window.location.href = "https://varsity23.aparsclassroom.com/Chemistry/Paper-1/Chapter-3";
}
else if (subject === "chemistry" && paper === "firstPaper" && chapter === "chapter4") {
    window.location.href = "https://varsity23.aparsclassroom.com/Chemistry/Paper-1/Chapter-4";
}
else if (subject === "chemistry" && paper === "firstPaper" && chapter === "chapter5") {
    window.location.href = "https://varsity23.aparsclassroom.com/Chemistry/Paper-1/Chapter-5";
}
else if (subject === "chemistry" && paper === "secondPaper" && chapter === "chapter1") {
    window.location.href = "https://varsity23.aparsclassroom.com/Chemistry/Paper-2/Chapter-1";
}else if (subject === "chemistry" && paper === "secondPaper" && chapter === "chapter2") {
    window.location.href = "https://varsity23.aparsclassroom.com/Chemistry/Paper-2/Chapter-2";
}else if (subject === "chemistry" && paper === "secondPaper" && chapter === "chapter3") {
    window.location.href = "https://varsity23.aparsclassroom.com/Chemistry/Paper-2/Chapter-3";
}else if (subject === "chemistry" && paper === "secondPaper" && chapter === "chapter4") {
    window.location.href = "https://varsity23.aparsclassroom.com/Chemistry/Paper-2/Chapter-4";
}else if (subject === "chemistry" && paper === "secondPaper" && chapter === "chapter5") {
    window.location.href = "https://varsity23.aparsclassroom.com/Chemistry/Paper-2/Chapter-5";
}



else if (subject === "math" && paper === "firstPaper" && chapter === "chapter1") {
    window.location.href = "https://varsity23.aparsclassroom.com/Math/Paper-1/Chapter-1";
} else if (subject === "math" && paper === "firstPaper" && chapter === "chapter3") {
    window.location.href = "https://varsity23.aparsclassroom.com/Math/Paper-1/Chapter-3";
} else if (subject === "math" && paper === "firstPaper" && chapter === "chapter7") {
    window.location.href = "https://varsity23.aparsclassroom.com/Math/Paper-1/Chapter-7";
} else if (subject === "math" && paper === "firstPaper" && chapter === "chapter9") {
    window.location.href = "https://varsity23.aparsclassroom.com/Math/Paper-1/Chapter-9";
} else if (subject === "math" && paper === "firstPaper" && chapter === "chapter10") {
    window.location.href = "https://varsity23.aparsclassroom.com/Math/Paper-1/Chapter-10";
} else if (subject === "math" && paper === "secondPaper" && chapter === "chapter3") {
    window.location.href = "https://varsity23.aparsclassroom.com/Math/Paper-2/Chapter-3";
} else if (subject === "math" && paper === "secondPaper" && chapter === "chapter4") {
    window.location.href = "https://varsity23.aparsclassroom.com/Math/Paper-2/Chapter-4";
} else if (subject === "math" && paper === "secondPaper" && chapter === "chapter6") {
    window.location.href = "https://varsity23.aparsclassroom.com/Math/Paper-2/Chapter-6";
} else if (subject === "math" && paper === "secondPaper" && chapter === "chapter7") {
    window.location.href = "https://varsity23.aparsclassroom.com/Math/Paper-2/Chapter-7";
} else if (subject === "math" && paper === "secondPaper" && chapter === "chapter8") {
    window.location.href = "https://varsity23.aparsclassroom.com/Math/Paper-2/Chapter-8";
} else if (subject === "math" && paper === "secondPaper" && chapter === "chapter9") {
    window.location.href = "https://varsity23.aparsclassroom.com/Math/Paper-2/Chapter-9";
}
else if (subject === "math" && paper === "firstPaper" && chapter === "chapter4") {
    window.location.href = "https://varsity23.aparsclassroom.com/Math/Paper-1/Chapter-4";
}
// else if (subject === "math" && paper === "firstPaper" && chapter === "chapter2") {
//     window.location.href = "link";
// }
// else if (subject === "math" && paper === "firstPaper" && chapter === "chapter5") {
//     window.location.href = "link";
// }
// else if (subject === "math" && paper === "firstPaper" && chapter === "chapter6") {
//     window.location.href = "link";
// }
// else if (subject === "math" && paper === "firstPaper" && chapter === "chapter8") {
//     window.location.href = "link";
// } else if (subject === "math" && paper === "secondPaper" && chapter === "chapter1") {
//     window.location.href = "link";
// } else if (subject === "math" && paper === "secondPaper" && chapter === "chapter2") {
//     window.location.href = "link";
// } else if (subject === "math" && paper === "secondPaper" && chapter === "chapter5") {
//     window.location.href = "link";
// } else if (subject === "math" && paper === "secondPaper" && chapter === "chapter10") {
//     window.location.href = "link";
// } else if (subject === "math" && paper === "secondPaper" && chapter === "chapter11") {
//     window.location.href = "link";
// }


else if (subject === "biology" && paper === "firstPaper" && chapter === "chapter1") {
    window.location.href = "https://varsity23.aparsclassroom.com/Biology/Paper-1/Chapter-1";
} else if (subject === "biology" && paper === "firstPaper" && chapter === "chapter2") {
    window.location.href = "https://varsity23.aparsclassroom.com/Biology/Paper-1/Chapter-2";
} else if (subject === "biology" && paper === "firstPaper" && chapter === "chapter3") {
    window.location.href = "https://varsity23.aparsclassroom.com/Biology/Paper-1/Chapter-3";
} else if (subject === "biology" && paper === "firstPaper" && chapter === "chapter4") {
    window.location.href = "https://varsity23.aparsclassroom.com/Biology/Paper-1/Chapter-4";
} else if (subject === "biology" && paper === "firstPaper" && chapter === "chapter5") {
    window.location.href = "https://varsity23.aparsclassroom.com/Biology/Paper-1/Chapter-5";
} else if (subject === "biology" && paper === "firstPaper" && chapter === "chapter6") {
    window.location.href = "https://varsity23.aparsclassroom.com/Biology/Paper-1/Chapter-6";
} else if (subject === "biology" && paper === "firstPaper" && chapter === "chapter7") {
    window.location.href = "https://varsity23.aparsclassroom.com/Biology/Paper-1/Chapter-7";
} else if (subject === "biology" && paper === "firstPaper" && chapter === "chapter8") {
    window.location.href = "https://varsity23.aparsclassroom.com/Biology/Paper-1/Chapter-8";
} else if (subject === "biology" && paper === "firstPaper" && chapter === "chapter9") {
    window.location.href = "https://varsity23.aparsclassroom.com/Biology/Paper-1/Chapter-9";
} else if (subject === "biology" && paper === "firstPaper" && chapter === "chapter10") {
    window.location.href = "https://varsity23.aparsclassroom.com/Biology/Paper-1/Chapter-10";
} else if (subject === "biology" && paper === "firstPaper" && chapter === "chapter11") {
    window.location.href = "https://varsity23.aparsclassroom.com/Biology/Paper-1/Chapter-11";
} else if (subject === "biology" && paper === "firstPaper" && chapter === "chapter12") {
    window.location.href = "https://varsity23.aparsclassroom.com/Biology/Paper-1/Chapter-12";
} else if (subject === "biology" && paper === "secondPaper" && chapter === "chapter1") {
    window.location.href = "https://varsity23.aparsclassroom.com/Biology/Paper-2/Chapter-1";
} else if (subject === "biology" && paper === "secondPaper" && chapter === "chapter2") {
    window.location.href = "https://varsity23.aparsclassroom.com/Biology/Paper-2/Chapter-2";
} else if (subject === "biology" && paper === "secondPaper" && chapter === "chapter3") {
    window.location.href = "https://varsity23.aparsclassroom.com/Biology/Paper-2/Chapter-3";
} else if (subject === "biology" && paper === "secondPaper" && chapter === "chapter4") {
    window.location.href = "https://varsity23.aparsclassroom.com/Biology/Paper-2/Chapter-4";
} else if (subject === "biology" && paper === "secondPaper" && chapter === "chapter5") {
    window.location.href = "https://varsity23.aparsclassroom.com/Biology/Paper-2/Chapter-5";
} else if (subject === "biology" && paper === "secondPaper" && chapter === "chapter6") {
    window.location.href = "https://varsity23.aparsclassroom.com/Biology/Paper-2/Chapter-6";
} else if (subject === "biology" && paper === "secondPaper" && chapter === "chapter7") {
    window.location.href = "https://varsity23.aparsclassroom.com/Biology/Paper-2/Chapter-7";
} else if (subject === "biology" && paper === "secondPaper" && chapter === "chapter8") {
    window.location.href = "https://varsity23.aparsclassroom.com/Biology/Paper-2/Chapter-8";
} else if (subject === "biology" && paper === "secondPaper" && chapter === "chapter9") {
    window.location.href = "https://varsity23.aparsclassroom.com/Biology/Paper-2/Chapter-9";
} else if (subject === "biology" && paper === "secondPaper" && chapter === "chapter10") {
    window.location.href = "https://varsity23.aparsclassroom.com/Biology/Paper-2/Chapter-10";
} else if (subject === "biology" && paper === "secondPaper" && chapter === "chapter11") {
    window.location.href = "https://varsity23.aparsclassroom.com/Biology/Paper-2/Chapter-11";
} else if (subject === "biology" && paper === "secondPaper" && chapter === "chapter12") {
    window.location.href = "https://varsity23.aparsclassroom.com/Biology/Paper-2/Chapter-12";
}
























    else {
        alert("No matching option found.");
    }
});