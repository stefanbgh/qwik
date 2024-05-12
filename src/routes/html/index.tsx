import { type RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ html }) => {
	html(
		200,
		` 
      <html>
        <body>
            <h1>HTML response</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora obcaecati quidem numquam? Blanditiis ex dicta ea, deserunt at cupiditate corrupti, laborum est quo ab non quod illo laudantium, vel perspiciatis voluptatum porro nihil voluptate. Laborum perspiciatis quae magnam id dolores totam praesentium odio repellat. Sapiente debitis voluptatum at nostrum quaerat?</p>
        </body>
      </html>`
	);
};
