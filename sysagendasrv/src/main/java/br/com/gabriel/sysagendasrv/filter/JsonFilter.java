package br.com.gabriel.sysagendasrv.filter;

import javax.ws.rs.core.MediaType;
import javax.ws.rs.ext.Provider;

import org.codehaus.jackson.jaxrs.JacksonJsonProvider;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.map.SerializationConfig;
import org.codehaus.jackson.map.util.ISO8601DateFormat;

@Provider
public class JsonFilter extends JacksonJsonProvider {

	public JsonFilter() {

		ObjectMapper objectMapper = locateMapper(ObjectMapper.class, MediaType.APPLICATION_JSON_TYPE);
		objectMapper.setDateFormat(new ISO8601DateFormat());
		objectMapper.configure(SerializationConfig.Feature.WRITE_DATES_AS_TIMESTAMPS, false);
	}
}
