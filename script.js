// your code here
document.getElementById("urlForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent default form submission
            
            // Get values from form fields
            var name = document.getElementById("name").value;
            var year = document.getElementById("year").value;
            
            // Construct query string
            var queryString = "?name=" + encodeURIComponent(name) + "&year=" + encodeURIComponent(year);
            
            // Update URL in h3 element
            document.getElementById("url").textContent = "https://localhost:8080/" + queryString;
        });