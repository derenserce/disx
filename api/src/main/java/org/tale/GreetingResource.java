package org.tale;

import java.util.ArrayList;
import java.util.List;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;

@Path("/api")
public class GreetingResource {

    @GET
    @Path("/hello")
    public String hello() {
        return "Hello";
    }

    @GET
    @Path("/tales")
    public List<Tale> tales() {
        List<Tale> tales = new ArrayList<>();

        tales.add(new Tale("The Tale of the Princess Kaguya"));
        tales.add(new Tale("The Tale of Genji"));

        return tales;
    }
}
