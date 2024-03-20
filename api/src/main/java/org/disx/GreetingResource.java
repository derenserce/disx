package org.disx;

import java.util.ArrayList;
import java.util.List;

import org.disx.model.Post;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("/api")
public class GreetingResource {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "Hello RESTEasy";
    }

    @GET
    @Path("/posts")
    public List<Post> posts() {
        List<Post> posts = new ArrayList<>();

        posts.add(new Post("First Post", "This is my first post"));
        posts.add(new Post("Second Post", "This is my second post"));

        return posts;
    }
}
