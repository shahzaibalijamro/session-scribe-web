// import { useState } from "react";

// export default function FeedbackForm() {
//   const [rating, setRating] = useState(3);
//   const [feedback, setFeedback] = useState("");

//   const stars = [1, 2, 3, 4, 5];

//   const handleStarClick = (starIndex) => {
//     setRating(starIndex);
//   };

//   const handleSubmit = () => {
//     // Handle form submission here
//   };

//   return (
//     <div className=" bg-white flex items-center justify-center max-auto pt-10">
//       <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 w-full max-w-5xl ">
//         {/* Title */}
//         <h1 className="text-3xl font-bold text-purple-500 mb-2">
//           Share Your Feedback
//         </h1>

//         {/* Subtitle */}
//         <p className="text-gray-900 text-base mb-6 font-semibold">
//           How would you rate your experience?
//         </p>

//         {/* Star Rating */}
//         <div className="flex gap-1 mb-8">
//           {stars.map((star) => (
//             <button
//               key={star}
//               onClick={() => handleStarClick(star)}
//               className="focus:outline-none bg-gray-200 rounded-full"
//             >
//               <svg
//                 width="32"
//                 height="32"
//                 viewBox="0 0 24 24"
//                 className={`${
//                   star <= rating
//                     ? "fill-purple-500 text-purple-500"
//                     : "fill-gray-300 text-purple-300"
//                 } transition-colors duration-150`}
//               >
//                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//               </svg>
//             </button>
//           ))}
//         </div>

//         {/* Feedback Text */}
//         <label className="block text-gray-900 text-base mb-3 font-semibold">
//           Share you thoughts
//         </label>

//         {/* Textarea */}
//         <div className="relative mb-2">
//           <textarea
//             value={feedback}
//             onChange={(e) => setFeedback(e.target.value)}
//             className="w-full h-32 p-4 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-800 text-base bg-[#FFF8F8]"
//             maxLength={2000}
//             placeholder=""
//           />
//         </div>

//         {/* Character Count */}
//         <p className="text-gray-400 text-sm mb-6">
//           {feedback.length}/2000 characters
//         </p>

//         {/* Submit Button */}
//         <button
//           onClick={handleSubmit}
//           className="w-full bg-purple-500 text-white py-4 rounded-2xl font-medium text-base hover:bg-purple-600 transition-colors duration-200"
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";

export default function FeedbackForm() {
  const [rating, setRating] = useState(3);
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const stars = [1, 2, 3, 4, 5];

  const handleStarClick = (starIndex) => {
    setRating(starIndex);
  };

  const handleSubmit = async () => {
    if (!feedback.trim()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Get the token from localStorage (adjust based on your auth implementation)
      const token = localStorage.getItem('token') || localStorage.getItem('authToken');

      if (!token) {
        throw new Error('Authentication required');
      }

      const response = await fetch('https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/feedback/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token, // Adjust format if needed
        },
        body: JSON.stringify({
          rating,
          message: feedback.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit feedback');
      }

      setSubmitStatus('success');
      // Reset form after successful submission
      setFeedback('');
      setRating(3);
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // <div className="bg-white flex items-center justify-center max-auto pt-10">
    //   <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 w-full max-w-5xl">
    //     {/* Title */}
    //     <h1 className="text-3xl font-bold text-purple-500 mb-2">
    //       Share Your Feedback
    //     </h1>

    //     {/* Subtitle */}
    //     <p className="text-gray-900 text-base mb-6 font-semibold">
    //       How would you rate your experience?
    //     </p>

    //     {/* Success Message */}
    //     {submitStatus === 'success' && (
    //       <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
    //         <p className="text-green-800 font-medium">
    //           ✅ Thank you for your feedback! We appreciate your input.
    //         </p>
    //       </div>
    //     )}

    //     {/* Error Message */}
    //     {submitStatus === 'error' && (
    //       <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
    //         <p className="text-red-800 font-medium">
    //           ❌ Failed to submit feedback. Please try again.
    //         </p>
    //       </div>
    //     )}

    //     {/* Star Rating */}
    //     <div className="flex gap-1 mb-8">
    //       {stars.map((star) => (
    //         <button
    //           key={star}
    //           onClick={() => handleStarClick(star)}
    //           disabled={isSubmitting}
    //           className="focus:outline-none cursor-pointer rounded-full disabled:opacity-50"
    //         >
    //           <svg
    //             width="32"
    //             height="32"
    //             viewBox="0 0 24 24"
    //             className={`${
    //               star <= rating
    //                 ? "fill-yellow-400 text-yellow-400"
    //                 : "fill-gray-300 text-purple-300"
    //             } transition-colors duration-150`}
    //           >
    //             <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    //           </svg>
    //         </button>
    //       ))}
    //     </div>

    //     {/* Feedback Text */}
    //     <label className="block text-gray-900 text-base mb-3 font-semibold">
    //       Share your thoughts
    //     </label>

    //     {/* Textarea */}
    //     <div className="relative mb-2">
    //       <textarea
    //         value={feedback}
    //         onChange={(e) => setFeedback(e.target.value)}
    //         disabled={isSubmitting}
    //         className="w-full h-32 p-4 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-800 text-base bg-[#FFF8F8] disabled:opacity-50"
    //         maxLength={2000}
    //         placeholder="Tell us about your experience..."
    //       />
    //     </div>

    //     {/* Character Count */}
    //     <p className="text-gray-400 text-sm mb-6">
    //       {feedback.length}/2000 characters
    //     </p>

    //     {/* Submit Button */}
    //     <button
    //       onClick={handleSubmit}
    //       disabled={isSubmitting || !feedback.trim()}
    //       className="w-full bg-purple-500 cursor-pointer text-white py-4 rounded-2xl font-medium text-base hover:bg-purple-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
    //     >
    //       {isSubmitting ? (
    //         <>
    //           <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    //             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    //             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    //           </svg>
    //           Submitting...
    //         </>
    //       ) : (
    //         'Submit'
    //       )}
    //     </button>
    //   </div>
    // </div>
    <main className="bg-white flex items-center justify-center max-auto pt-10">
      <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 w-full max-w-5xl" role="form" aria-labelledby="feedback-heading">
        {/* Title */}
        <header className="mb-6">
          <h1 id="feedback-heading" className="text-3xl font-bold text-purple-500 mb-2">
            Share Your Feedback
          </h1>

          {/* Subtitle */}
          <p className="text-gray-900 text-base font-semibold">
            How would you rate your experience?
          </p>
        </header>

        {/* Status Messages */}
        <section aria-live="polite" aria-label="Feedback status">
          {/* Success Message */}
          {submitStatus === 'success' && (
            <aside className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl" role="alert">
              <p className="text-green-800 font-medium">
                ✅ Thank you for your feedback! We appreciate your input.
              </p>
            </aside>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <aside className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl" role="alert">
              <p className="text-red-800 font-medium">
                ❌ Failed to submit feedback. Please try again.
              </p>
            </aside>
          )}
        </section>

        {/* Feedback Form */}
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} aria-labelledby="feedback-heading">
          {/* Star Rating */}
          <fieldset className="mb-8">
            <legend className="sr-only">Rate your experience from 1 to 5 stars</legend>
            <div className="flex gap-1" role="radiogroup" aria-labelledby="rating-label" aria-required="true">
              <span id="rating-label" className="sr-only">Star rating</span>
              {stars.map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleStarClick(star)}
                  disabled={isSubmitting}
                  className="focus:outline-none cursor-pointer rounded-full disabled:opacity-50 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  role="radio"
                  aria-checked={star === rating}
                  aria-label={`Rate ${star} out of 5 stars`}
                  tabIndex={star === (rating || 1) ? 0 : -1}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    className={`${star <= rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-gray-300 text-purple-300"
                      } transition-colors duration-150`}
                    aria-hidden="true"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </button>
              ))}
            </div>
            {rating > 0 && (
              <p className="sr-only" aria-live="polite">
                You have selected {rating} out of 5 stars
              </p>
            )}
          </fieldset>

          {/* Feedback Text Section */}
          <div className="mb-6">
            <label htmlFor="feedback-textarea" className="block text-gray-900 text-base mb-3 font-semibold">
              Share your thoughts
            </label>

            {/* Textarea */}
            <div className="relative mb-2">
              <textarea
                id="feedback-textarea"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                disabled={isSubmitting}
                className="w-full h-32 p-4 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-800 text-base bg-[#FFF8F8] disabled:opacity-50"
                maxLength={2000}
                placeholder="Tell us about your experience..."
                aria-describedby="char-count feedback-help"
                rows={4}
              />
              <div id="feedback-help" className="sr-only">
                Please provide detailed feedback about your experience. Maximum 2000 characters.
              </div>
            </div>

            {/* Character Count */}
            <p id="char-count" className="text-gray-400 text-sm" aria-live="polite">
              {feedback.length}/2000 characters
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={isSubmitting || !feedback.trim()}
            className="w-full bg-purple-500 cursor-pointer text-white py-4 rounded-2xl font-medium text-base hover:bg-purple-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            aria-describedby="submit-help"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Submitting...</span>
                <span className="sr-only">Please wait while we submit your feedback</span>
              </>
            ) : (
              'Submit'
            )}
          </button>
          <div id="submit-help" className="sr-only">
            {!feedback.trim() ? "Please enter your feedback before submitting" : "Click to submit your feedback and rating"}
          </div>
        </form>
      </section>
    </main>
  );
}