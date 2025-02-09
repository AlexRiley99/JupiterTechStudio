let hasGreeted = false;  // Flag to track if the greeting has been sent

// Adding an event listener that waits for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
  
    // Immediately Invoked Function Expression (IIFE)
    (function(d, t) {
    
        // Create a new script element (`<script>` tag) and get the first script tag in the document
        var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
        
        // When the script is loaded, run the following code
        v.onload = function() {
        
          // Load the Voiceflow chat widget with specific configurations
          window.voiceflow.chat.load({
            verify: { projectID: '67a796dfd2483de383f2cce3' }, // This is the project ID for the Voiceflow project
            url: 'https://general-runtime.voiceflow.com', // URL of the Voiceflow runtime server
            versionID: 'production' // Set to 'production' to load the production version
          });

          //Prevent greeting from repeating
          if (!hasGreeted) {
            // Trigger the greeting message
            window.voiceflow.chat.sendMessage("Hi! I'm Europa! What can I do for you today?");
            
            // Set the flag to true to prevent future greetings
            hasGreeted = true;
          }
        }
        
        // Set the source for the newly created script element to load a specific JavaScript file
        v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; // This is the URL for the Voiceflow widget's script
        v.type = "text/javascript"; // Set the type of the script to JavaScript
        
        // Insert the new script element before the first existing script tag in the document
        s.parentNode.insertBefore(v, s);
        
    })(document, 'script'); // Pass in the document object and 'script' as the tag type to the IIFE
  
  });
  