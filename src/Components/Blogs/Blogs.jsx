import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="bg-orange-100 pt-5 m-5 rounded-md">
        <h2 className="text-2xl font-bold pb-5 px-5">
          Q-1: What is Context API?
        </h2>
        <div className="bg-orange-200">
          <p className="p-5">
            A React app can use the React Context API to generate global
            variables that can be passed around. This is an alternative to "prop
            drilling," which entails passing props from grandparent to child to
            parent and so on. Context is also marketed as a simpler, lighter way
            to Redux state management.
          </p>
        </div>
      </div>
      <div className="bg-orange-100 pt-5 mx-5 rounded-md">
        <h2 className="text-2xl font-bold pb-5 px-5">
          Q-2: What is Semantic Tag?
        </h2>
        <div className="bg-orange-200">
          <p className="p-5">
            Semantic HTML elements are those that express their meaning in a way
            that is both human and machine readable. <strong>Header</strong>,{" "}
            <strong>footer</strong>, and <strong>article</strong> elements are
            all deemed semantic since they accurately explain the element's
            purpose and the sort of material it contains. The value of producing
            semantic HTML originates from the desire to communicate, which
            should be the primary purpose of any online page. By including
            semantic tags in your text, you can convey more information about
            it, which can help with communication. Semantic tags, in particular,
            make it apparent to the browser what a page and its content signify.
          </p>
        </div>
      </div>
      <div className="bg-orange-100 pt-5 mx-5 rounded-md mt-5">
        <h2 className="text-2xl font-bold pb-5 px-5">
          Q-3: Difference between Block and Inline-block element?
        </h2>
        <div className="bg-orange-200">
          <p className="p-5">
            Block elements are a type of block that has many elements in a
            single line. While inline items take up the complete width of a
            line, there will only be one line in the space. Inline elements
            ignore the top and bottom margins, focusing instead on the left and
            right, as well as the padding.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
